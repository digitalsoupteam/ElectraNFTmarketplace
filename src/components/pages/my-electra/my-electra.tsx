import { useState, useEffect } from 'react';
import { StyledCommunication } from './styled';
import { useContractRead, useContractReads, useWalletClient } from 'wagmi';
import MyElectraTokensList from '../../blocks/my-electra-tokens-list/my-electra-tokens-list';
import Moped from '../../../contracts/moped.json';
import StakingStrategiesData from '../../../contracts/stakingStrategies.json';

interface IMyElectra {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const MyElecrta: React.FC<IMyElectra> = () => {
  const [sortedData, setSortedData] = useState([]);

  const userWalletAddress = useWalletClient().data?.account.address;

  const { data: totalMintedAmount } = useContractRead({
    address: Moped.address as `0x${string}`,
    abi: Moped.abi,
    functionName: 'totalMintedAmount',
  });

  const { data: userNFTCount } = useContractRead({
    address: Moped.address as `0x${string}`,
    abi: Moped.abi,
    functionName: 'balanceOf',
    args: [userWalletAddress],
  });

  interface IContract {
    address: `0x${string}`;
    abi: any[];
    functionName: string;
    args: any[];
  }

  interface ICcreatePropContractByCount {
    (count: number): IContract[];
  }

  const createPropContractByCount: ICcreatePropContractByCount = (count) => {
    const contracts: IContract[] = [];
    for (let i = 0; i < count; i++) {
      contracts.push({
        address: Moped.address as `0x${string}`,
        abi: Moped.abi,
        functionName: 'tokenOfOwnerByIndex',
        args: [userWalletAddress as `0x${string}`, i],
      });
    }
    return contracts;
  };

  const { data: userTokens } = useContractReads({
    contracts: createPropContractByCount(Number(userNFTCount)),
  });

  const createConfigStakingStrategy = () => {
    const contractSettings: IContract[] =
      userTokens?.map((tokenId) => {
        return {
          address: Moped.address as `0x${string}`,
          abi: Moped.abi,
          functionName: 'tokenStakingStrategy',
          args: [tokenId.result],
        };
      }) || [];

    return contractSettings;
  };

  const { data: tokensStakingStrategies } = useContractReads({
    contracts: createConfigStakingStrategy(),
  });

  const createConfigGetTokenData = () => {
    const contractSettings =
      userTokens?.map((tokenId, index) => {
        const strategyAddress = tokensStakingStrategies
          ? tokensStakingStrategies[index].result
          : '0x';

        const matchingItem = StakingStrategiesData.find((item) => {
          return (
            String(item.address) ===
            String(tokensStakingStrategies?.[index].result)
          );
        });

        const strategyAbi = matchingItem?.abi || [];

        return [
          {
            address: strategyAddress as `0x${string}`,
            abi: strategyAbi,
            functionName: 'initialTimestamp',
            args: [Moped.address, tokenId.result],
          },
          {
            address: Moped.address as `0x${string}`,
            abi: Moped.abi,
            functionName: 'name',
          },
          {
            address: strategyAddress as `0x${string}`,
            abi: strategyAbi,
            functionName: 'withdrawnRewards',
            args: [Moped.address, tokenId.result],
          },
          {
            address: strategyAddress as `0x${string}`,
            abi: strategyAbi,
            functionName: 'estimateRewards',
            args: [Moped.address, tokenId.result],
          },
          {
            address: strategyAddress as `0x${string}`,
            abi: strategyAbi,
            functionName: 'canSell',
            args: [Moped.address, tokenId.result],
          },
          {
            address: strategyAddress as `0x${string}`,
            abi: strategyAbi,
            functionName: 'estimateSell',
            args: [Moped.address, tokenId.result],
          },
        ];
      }) || [];

    return contractSettings.flat() as IContract[];
  };

  const { data: tokensData } = useContractReads({
    contracts: createConfigGetTokenData(),
  });

  const sortTokensData = (data) => {
    // Разбиваем на массивы по 6 объектов
    const reducedData = data?.reduce((acc, curr, index) => {
      const groupSize = 6;
      const chunkIndex = Math.floor(index / groupSize);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(curr);

      return acc;
    }, [] as any[][]);

    // Структурируем объекты
    const structuredData = [];

    reducedData?.forEach((item, index) => {
      const structuredItem = {
        date: item[0].result,
        nft: item[1].result,
        earned: item[2].result,
        canClaim: item[3].result,
        canSell: item[4].result,
        sellingPrice: item[5].result,
        tokenId: userTokens?.[index].result,
        investmentType: tokensStakingStrategies?.[index].result || null,
        quantity: 1,
      };

      structuredData.push(structuredItem);
    });

    // группируем нфт по дате и стратегии стекинга
    const stackedData = [];
    const stackedIDs = [];

    structuredData?.forEach((firstItem) => {
      if (!stackedIDs?.includes(firstItem.tokenId)) {
        const stackedItem = structuredData.filter((secondItem) => {
          if (
            firstItem.date === secondItem.date &&
            firstItem.investmentType === secondItem.investmentType
          ) {
            stackedIDs.push(secondItem.tokenId);
            return secondItem;
          } else {
            return;
          }
        });

        if (stackedItem) {
          stackedData.push(stackedItem);
        } else {
          stackedData.push(firstItem);
        }
      }
    });

    return stackedData;
  };

  useEffect(() => {
    setSortedData(sortTokensData(tokensData));
  }, [tokensData]);

  return (
    <main>
      <MyElectraTokensList items={sortedData} />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          backgroundColor: 'grey',
          padding: '20px',
        }}
      >
        <p>Total tokens minted {Number(totalMintedAmount)}</p>
        <p>Total tokens minted by user {Number(userNFTCount)}</p>
      </div>

      <p style={{ color: '#000' }}></p>
      <StyledCommunication />
    </main>
  );
};

export default MyElecrta;
