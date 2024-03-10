import {
  StyledMyElectraNftItem,
  ItemCell,
  ItemImg,
  // ItemCheckbox,
  Reward,
  ClaimButton,
  SellButton,
  SellingPriceContainer,
  SellingPriceAmount,
} from './styled';
import { useState, useEffect } from 'react';
import { useWalletClient, useContractWrite } from 'wagmi';
import StakingStrategies from '../../../contracts/stakingStrategies.json';
import Moped from '../../../contracts/moped.json';
import Tokens from '../../../contracts/tokens.json';
import { encodeFunctionData } from 'viem';
import MopedMini from '../../../assets/moped-nft-mini.png';
import { t } from 'i18next';

export interface IMyElectraItem {
  date: number;
  nft: string;
  tokenId: number;
  investmentType: string;
  earned: number;
  canClaim: bigint[];
  canSell: boolean;
  sellingPrice: bigint;
}

interface IMyElectraNftItem {
  item: IMyElectraItem[];
}

const tokenStakingStrategies = [
  {
    name: '4% stable for 2 years',
    address: StakingStrategies[0].address,
  },
  {
    name: '4% stable for 3 years',
    address: StakingStrategies[1].address,
  },
  {
    name: '4% stable for 5 years',
    address: StakingStrategies[2].address,
  },
  {
    name: '50% flex',
    address: StakingStrategies[3].address,
  },
];

const NftImages = {
  Moped: MopedMini,
};

const MyElectraNftItem: React.FC<IMyElectraNftItem> = ({ item }) => {
  const [encodedMulicallClaimData, setEncodedMulicallClaimData] = useState<
    string | `0x${string}`[]
  >('');
  const [encodedMulicallSellData, setEncodedMulicallSellData] = useState<
    string | `0x${string}`[]
  >('');
  // const [checked, setCkecked] = useState(false);

  const { data: walletClient } = useWalletClient();

  const formateDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day.toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${year.toString().slice(-2)}`;
    return formattedDate;
  };

  const getStakingStrategyName = (address: string) => {
    const matchedStrategy = tokenStakingStrategies.find((item) => {
      return address === String(item.address);
    });

    return matchedStrategy?.name;
  };

  const estimateTotalClaimForItem = (item: IMyElectraItem[]) => {
    let total = 0;
    item.forEach((item) => {
      total += Number(item.canClaim[0]) / 1e18;
    });
    return total.toFixed(2);
  };

  const estimateEarnedForItem = (item: IMyElectraItem[]) => {
    let total = 0;
    item.forEach((item) => {
      total += Number(item.earned) / 1e18;
    });
    return total.toFixed(2);
  };

  const estimateSellingPrice = (item: IMyElectraItem[]) => {
    let total = 0;
    item.forEach((item) => {
      total += Number(item.sellingPrice) / 1e18;
    });
    return total;
  };

  const getStakingStrategyABI = (address: string): any[] => {
    const findedItem = StakingStrategies.find((itemStrategy) =>
      itemStrategy.address === address ? itemStrategy.abi : []
    );
    const findedABI = findedItem?.abi;
    return findedABI ? findedABI : [];
  };

  const claimAmount = item[0].canClaim[0];

  const slippage =
    BigInt(import.meta.env.VITE_USDT_SLIPPAGE * 1e18) / BigInt(1e18);

  const minWidthdrawAmountSingleClaim =
    claimAmount - (claimAmount / BigInt(100)) * slippage;

  const { write: singleClaim, isLoading: claiming } = useContractWrite({
    address: item[0].investmentType as `0x${string}`,
    abi: getStakingStrategyABI(item[0].investmentType),
    functionName: 'claim',
    args: [
      Moped.address,
      item[0].tokenId,
      Tokens[0].address,
      minWidthdrawAmountSingleClaim,
    ],
  });

  const { write: multicallClaim, isLoading: multicallClaiming } =
    useContractWrite({
      address: item[0].investmentType as `0x${string}`,
      abi: getStakingStrategyABI(item[0].investmentType),
      functionName: 'multicall',
      account: walletClient?.account,
      args: [encodedMulicallClaimData],
    });

  const minWidthdrawAmountSell =
    item[0].sellingPrice - (item[0].sellingPrice / BigInt(100)) * slippage;

  const { write: singleSell, isLoading: selling } = useContractWrite({
    address: item[0].investmentType as `0x${string}`,
    abi: getStakingStrategyABI(item[0].investmentType),
    functionName: 'sell',
    args: [
      Moped.address,
      item[0].tokenId,
      Tokens[0].address,
      minWidthdrawAmountSell,
    ],
  });

  const { write: multicallSell, isLoading: multicallSelling } =
    useContractWrite({
      address: item[0].investmentType as `0x${string}`,
      abi: getStakingStrategyABI(item[0].investmentType),
      functionName: 'multicall',
      account: walletClient?.account,
      args: [encodedMulicallSellData],
    });

  useEffect(() => {
    if (item.length > 1) {
      const encodedClaimMulticallArray = item.map((item) => {
        const itemAddress = Moped.address;
        const tokenId = item.tokenId;
        const tokenAddress = Tokens[0].address;
        const minWithdrawAmount =
          item.canClaim[0] - (item.canClaim[0] / BigInt(100)) * slippage;

        return encodeFunctionData({
          abi: getStakingStrategyABI(item.investmentType),
          functionName: 'claim',
          args: [itemAddress, tokenId, tokenAddress, minWithdrawAmount],
        });
      });
      setEncodedMulicallClaimData(encodedClaimMulticallArray);

      const encodedSellMulticallArray = item.map((item) => {
        const itemAddress = Moped.address;
        const tokenId = item.tokenId;
        const tokenAddress = Tokens[0].address;
        const minWithdrawAmount =
          item.sellingPrice - (item.sellingPrice / BigInt(100)) * slippage;

        return encodeFunctionData({
          abi: getStakingStrategyABI(item.investmentType),
          functionName: 'sell',
          args: [itemAddress, tokenId, tokenAddress, minWithdrawAmount],
        });
      });
      setEncodedMulicallSellData(encodedSellMulticallArray);
    }
  }, [item, walletClient?.account]);

  const handleClaim = () => {
    if (item.length > 1) {
      try {
        multicallClaim?.();
      } catch (error) {
        console.log(`error while multiclaiming ${error}`);
      }
    } else {
      try {
        singleClaim();
      } catch (error) {
        console.log(`error while claiming ${error}`);
      }
    }
  };

  const handleSell = () => {
    if (item.length > 1) {
      try {
        multicallSell?.();
      } catch (error) {
        console.log(`error while multiclaiming ${error}`);
      }
    } else {
      try {
        singleSell();
      } catch (error) {
        console.log(`error while claiming ${error}`);
      }
    }
  };

  return (
    <StyledMyElectraNftItem>
      {item.length === 1 ? (
        <>
          <ItemCell>
            {/* <ItemCheckbox checked={checked}> */}
            {/* <input
                type={'checkbox'}
                onChange={() => setCkecked(!checked)}
              ></input> */}
            <ItemImg src={NftImages[item[0].nft as keyof typeof NftImages]} />
            {/* </ItemCheckbox> */}
          </ItemCell>
          <ItemCell>
            {item[0].date ? formateDate(Number(item[0].date)) : ''}
          </ItemCell>
          <ItemCell>{item.length}</ItemCell>
          <ItemCell>{item[0].nft ? `E-${String(item[0].nft)}` : ''}</ItemCell>
          <ItemCell>
            {item[0].investmentType
              ? getStakingStrategyName(String(item[0].investmentType))
              : ''}
          </ItemCell>
          <ItemCell>
            {typeof item[0].earned !== 'undefined'
              ? `${(Number(item[0].earned) / 1e18).toFixed(2)}$`
              : ''}
          </ItemCell>
          <ItemCell>
            <Reward>
              {item[0].canClaim
                ? `${(Number(item[0].canClaim[0]) / 1e18).toFixed(2)}$`
                : ''}
            </Reward>
            <ClaimButton
              disabled={item[0].canClaim[0] === 0n}
              onClick={handleClaim}
            >
              {claiming
                ? t('my-electra:item.claiming') + '...'
                : t('my-electra:item.claim')}
            </ClaimButton>
            <SellButton disabled={!item[0].canSell} onClick={handleSell}>
              {selling
                ? t('my-electra:item.selling') + '...'
                : t('my-electra:item.sell')}
              <SellingPriceContainer>
                {t('my-electra:item.price')}
                <SellingPriceAmount>
                  {item[0].sellingPrice
                    ? Number(item[0].sellingPrice) / 1e18
                    : ''}
                  $
                </SellingPriceAmount>
              </SellingPriceContainer>
            </SellButton>
          </ItemCell>
        </>
      ) : (
        <>
          <ItemCell>
            {/* <ItemCheckbox checked={checked}> */}
            {/* <input
                type={'checkbox'}
                onChange={() => setCkecked(!checked)}
              ></input> */}
            <ItemImg src={NftImages[item[0].nft as keyof typeof NftImages]} />
            {/* </ItemCheckbox> */}
          </ItemCell>
          <ItemCell>
            {item[0].date ? formateDate(Number(item[0].date)) : ''}
          </ItemCell>
          <ItemCell>{item.length}</ItemCell>
          <ItemCell>{item[0].nft ? `E-${String(item[0].nft)}` : ''}</ItemCell>
          <ItemCell>
            {item[0].investmentType
              ? getStakingStrategyName(String(item[0].investmentType))
              : ''}
          </ItemCell>
          <ItemCell>
            {typeof item[0].earned !== 'undefined'
              ? `${estimateEarnedForItem(item)} $`
              : ''}
          </ItemCell>
          <ItemCell>
            <Reward>
              {item[0].canClaim ? `${estimateTotalClaimForItem(item)} $` : ''}
            </Reward>
            <ClaimButton
              disabled={item[0].canClaim[0] === 0n}
              onClick={handleClaim}
            >
              {multicallClaiming
                ? t('my-electra:item.claiming') + '...'
                : t('my-electra:item.claim')}
            </ClaimButton>
            <SellButton disabled={!item[0].canSell} onClick={handleSell}>
              {multicallSelling
                ? t('my-electra:item.selling') + '...'
                : t('my-electra:item.sell')}
              <SellingPriceContainer>
                {t('my-electra:item.price')}
                <SellingPriceAmount>
                  {item[0].sellingPrice ? estimateSellingPrice(item) : ''}
                  {'$'}
                </SellingPriceAmount>
              </SellingPriceContainer>
            </SellButton>
          </ItemCell>
        </>
      )}
    </StyledMyElectraNftItem>
  );
};

export default MyElectraNftItem;
