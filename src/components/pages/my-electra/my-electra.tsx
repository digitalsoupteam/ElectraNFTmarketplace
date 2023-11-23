import { useState, useEffect, useCallback } from 'react';
import {
  StyledMyElectra,
  MyElectraTitle,
  TitleLogo,
  TotalEarnings,
  TotalEarningsAmount,
  StyledCommunication,
  NoNfts,
  NoNftsText,
} from './styled';
import MyElectraHero from '../../blocks/my-electra-hero/my-electra-hero';
import { useContractRead, useContractReads, useWalletClient } from 'wagmi';
import MyElectraTokensList from '../../blocks/my-electra-tokens-list/my-electra-tokens-list';
import Moped from '../../../contracts/moped.json';
import StakingStrategiesData from '../../../contracts/stakingStrategies.json';
import { TitleSize } from '../../ui/title/title';
import ElectraLogo from '../../../assets/logo-gradient.svg';
import Wrapper from '../../layout/wrapper/wrapper';
import Button from '../../ui/button/button';

interface IMyElectra {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const MyElecrta: React.FC<IMyElectra> = ({ isLoggedIn, connectWallet }) => {
  const [sortedData, setSortedData] = useState<any>([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const userWalletAddress = useWalletClient().data?.account.address;

  const { data: userNFTCount } = useContractRead({
    address: Moped.address as `0x${string}`,
    abi: Moped.abi,
    functionName: 'balanceOf',
    args: [userWalletAddress],
    watch: true,
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
    watch: true,
  });

  interface IMyElectraItem {
    date: number;
    nft: string;
    tokenId: number;
    investmentType: string;
    earned: number;
    canClaim: any[];
    canSell: boolean;
    sellingPrice: number;
  }

  const sortTokensData = useCallback<
    (data: ITokensDataItem[] | []) => IMyElectraItem[][]
  >(
    (data: any) => {
      // Разбиваем на массивы по 6 объектов
      const reducedData = data?.reduce((acc: any, curr: any, index: any) => {
        const groupSize = 6;
        const chunkIndex = Math.floor(index / groupSize);

        if (!acc[chunkIndex]) {
          acc[chunkIndex] = [];
        }

        acc[chunkIndex].push(curr);

        return acc;
      }, [] as any[][]);

      // Структурируем объекты
      const structuredData: any = [];

      reducedData?.forEach((item: any, index: any) => {
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
      const stackedData: any = [];
      const stackedIDs: any = [];

      structuredData?.forEach((firstItem: any) => {
        if (!stackedIDs?.includes(firstItem.tokenId)) {
          const stackedItem = structuredData.filter((secondItem: any) => {
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
    },
    [tokensStakingStrategies, userTokens]
  );

  interface ITokensDataItem {
    error?: Error | undefined;
    result?:
      | string
      | number
      | boolean
      | string[]
      | number[]
      | boolean[]
      | undefined;
    status: string;
  }

  useEffect(() => {
    const sortedData = sortTokensData(tokensData || []);
    setSortedData(sortedData);
  }, [tokensData, sortTokensData]);

  useEffect(() => {
    let total = 0;

    sortedData.forEach((itemsGroups: IMyElectraItem[]) => {
      itemsGroups.forEach((item) => {
        total += Number(item.earned) / 1e18;
      });
    });

    setTotalEarnings(total);
  }, [sortedData]);

  return (
    <main>
      {isLoggedIn ? (
        <StyledMyElectra>
          <Wrapper>
            <MyElectraTitle size={TitleSize.BIG} as={'h1'}>
              My
              <TitleLogo src={ElectraLogo} alt='Electra' />
            </MyElectraTitle>
            {sortedData && sortedData.length ? (
              <TotalEarnings>
                Total earnings:{' '}
                <TotalEarningsAmount>
                  {totalEarnings.toFixed(2)} $
                </TotalEarningsAmount>
              </TotalEarnings>
            ) : (
              ''
            )}
          </Wrapper>
          {sortedData && sortedData.length ? (
            <MyElectraTokensList items={sortedData} />
          ) : (
            <Wrapper>
              <NoNfts>
                <NoNftsText>You have no NFts yet</NoNftsText>
                <Button to={'/market'} isSmall={true}>
                  Go to moraket
                </Button>
              </NoNfts>
            </Wrapper>
          )}
          <StyledCommunication />
        </StyledMyElectra>
      ) : (
        <MyElectraHero connectWallet={connectWallet} />
      )}
    </main>
  );
};

export default MyElecrta;
