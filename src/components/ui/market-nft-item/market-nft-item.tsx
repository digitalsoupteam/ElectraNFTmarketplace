import { useState, useEffect } from 'react';
import {
  StyledNft,
  NftImage,
  NftTitle,
  NftContent,
  NftProperties,
  PropertiesItem,
  PropertiesItemTitle,
  StyledDropdown,
  NftPrice,
  PriceTitle,
  PriceButton,
  PriceButtonToken,
  NftBuyButton,
  USTax,
  OutOfStock,
} from './styled';
import { useContractRead, useContractWrite, useWalletClient } from 'wagmi';
import { TitleSize } from '../title/title';
import Quantity from '../quantity/quantity';
import Tokens from '../../../contracts/tokens.json';
import Treasury from '../../../contracts/treasury.json';
import StakingStrategies from '../../../contracts/stakingStrategies.json';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface IMarketNftItem {
  image: string;
  title: string;
  address?: `0x${string}`;
  abi: any;
  disabled?: boolean;
  isLoggedIn: boolean;
  connectWalltet?: () => void;
}

const MarketNftItem: React.FC<IMarketNftItem> = ({
  image,
  title,
  address,
  abi,
  disabled,
  isLoggedIn,
  connectWalltet,
}) => {
  useTranslation();
  const BNB_PLACEHOLDER = '0x0000000000000000000000000000000000000000';

  const [currentIvnestmentType, setCurrentIvnestmentType] = useState('');
  const [isInvestmentTypeValid, setIsInvestmentTypeValid] = useState(false);
  const [isUSTaxChecked, setIsUSTaxChecked] = useState(false);
  const [mintButtonFirstClick, setMintButtonFirstClick] = useState(false);
  const [USDPrice, setUSDPrice] = useState(0n);
  const [USDTPrice, setUSDTPrice] = useState(0n);
  const [USDTTotalPrice, setUSDTotalPrice] = useState(0n);
  const [ELECTPrice, setELECTPrice] = useState(0n);
  const [ELECTTotalPrice, setELECTotalPrice] = useState(0n);
  const [BNBPrice, setBNBPrice] = useState(0n);
  const [BNBTotalPrice, setBNBTotalPrice] = useState(0n);
  const [WBNBPrice, setWBNBPrice] = useState(0n);
  const [WBNBTotalPrice, setWBNBTotalPrice] = useState(0n);
  const [quantity, setQuantity] = useState(1);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);

  const { data: walletClient } = useWalletClient();

  const getSlippage = () => {
    let slippage = '0';

    if (Tokens[currentTokenIndex].name === 'ELCT') {
      slippage = import.meta.env.VITE_ELCT_SLIPPAGE;
    }

    if (Tokens[currentTokenIndex].name === 'USDT') {
      slippage = import.meta.env.VITE_USDT_SLIPPAGE;
    }

    if (Tokens[currentTokenIndex].name === 'BNB') {
      slippage = import.meta.env.VITE_BNB_SLIPPAGE;
    }

    if (Tokens[currentTokenIndex].name === 'WBNB') {
      slippage = import.meta.env.VITE_WBNB_SLIPPAGE;
    }

    return parseFloat(slippage);
  };

  const getCurrentPrice = () => {
    let currentPrice = 0n;

    if (Tokens[currentTokenIndex].name === 'USDT') {
      currentPrice = USDTTotalPrice;
    }

    if (Tokens[currentTokenIndex].name === 'ELCT') {
      currentPrice = ELECTTotalPrice;
    }

    if (Tokens[currentTokenIndex].name === 'BNB') {
      currentPrice = BNBTotalPrice;
    }

    if (Tokens[currentTokenIndex].name === 'WBNB') {
      currentPrice = WBNBTotalPrice;
    }

    return currentPrice;
  };

  const getMaxPayTokenAmount = () => {
    const currentPrice = getCurrentPrice();
    const slippage = getSlippage();

    const maxPayTokenAmount =
      currentPrice +
      (currentPrice / BigInt(100)) * (BigInt(slippage * 1e18) / BigInt(1e18));

    return maxPayTokenAmount;
  };

  useEffect(() => {
    setUSDTotalPrice(BigInt(quantity) * USDTPrice);
    setELECTotalPrice(BigInt(quantity) * ELECTPrice);
    setBNBTotalPrice(BigInt(quantity) * BNBPrice);
    setWBNBTotalPrice(BigInt(quantity) * WBNBPrice);
  }, [quantity, USDTPrice, ELECTPrice, BNBPrice, WBNBPrice]);

  const handlerQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const { data: price } = useContractRead({
    address: address,
    abi: abi,
    functionName: 'price',
    watch: true,
    onSuccess: () => {
      if (typeof price === 'bigint') {
        setUSDPrice(price);
      }
    },
  });

  const { data: fetchedUSDTPrice } = useContractRead({
    address: Treasury.address as `0x${string}`,
    abi: Treasury.abi,
    functionName: 'usdAmountToToken',
    args: [USDPrice, Tokens[0].address],
    watch: true,
    onSuccess: () => {
      if (typeof fetchedUSDTPrice === 'bigint') {
        setUSDTPrice(fetchedUSDTPrice);
      }
    },
  });

  const { data: fetchedELECTPrice } = useContractRead({
    address: Treasury.address as `0x${string}`,
    abi: Treasury.abi,
    functionName: 'usdAmountToToken',
    args: [USDPrice, Tokens[1].address],
    watch: true,
    onSuccess: () => {
      if (typeof fetchedELECTPrice === 'bigint') {
        setELECTPrice(fetchedELECTPrice);
      }
    },
  });

  const { data: fetchedBNBPrice } = useContractRead({
    address: Treasury.address as `0x${string}`,
    abi: Treasury.abi,
    functionName: 'usdAmountToToken',
    args: [USDPrice, Tokens[2].address],
    watch: true,
    onSuccess: () => {
      if (typeof fetchedBNBPrice === 'bigint') {
        setBNBPrice(fetchedBNBPrice);
      }
    },
  });

  const { data: fetchedWBNBPrice } = useContractRead({
    address: Treasury.address as `0x${string}`,
    abi: Treasury.abi,
    functionName: 'usdAmountToToken',
    args: [USDPrice, Tokens[3].address],
    watch: true,
    onSuccess: () => {
      if (typeof fetchedWBNBPrice === 'bigint') {
        setWBNBPrice(fetchedWBNBPrice);
      }
    },
  });

  const {
    write: mintWrite,
    isLoading: isMinting,
    isSuccess: mintSuccess,
  } = useContractWrite({
    address: address,
    abi: abi,
    functionName: 'mint',
    account: walletClient?.account,
    value:
      Tokens[currentTokenIndex].address === BNB_PLACEHOLDER
        ? getMaxPayTokenAmount()
        : undefined,
    args: [
      BigInt(quantity),
      currentIvnestmentType,
      Tokens[currentTokenIndex].address,
      getMaxPayTokenAmount(),
      '0x',
    ],
    onError: (error) => {
      alert(error);
    },
  });

  const { data: checkAllowance } = useContractRead({
    address: Tokens[currentTokenIndex].address as `0x${string}`,
    abi: Tokens[currentTokenIndex].abi,
    functionName: 'allowance',
    args: [walletClient?.account.address, address],
    onError: (error) => {
      console.error(error);
    },
    watch: true,
  });

  const { write: approveWrite, isLoading: isApproveLoading } = useContractWrite(
    {
      address: Tokens[currentTokenIndex].address as `0x${string}`,
      abi: Tokens[currentTokenIndex].abi,
      functionName: 'approve',
      account: walletClient?.account,
      onSuccess: () => {
        mintWrite ? mintWrite() : alert(`mintWrite is undefined`);
      },
    }
  );

  useEffect(() => {
    if (currentIvnestmentType) {
      setIsInvestmentTypeValid(true);
    } else {
      setIsInvestmentTypeValid(false);
    }
  }, [currentIvnestmentType]);

  const handleMint = async () => {
    setMintButtonFirstClick(true);

    const currentTokenPrice =
      currentTokenIndex === 0 ? USDTTotalPrice : ELECTTotalPrice;

    if (isInvestmentTypeValid && isUSTaxChecked) {
      if (
        (typeof checkAllowance === 'bigint' &&
          checkAllowance >= currentTokenPrice) ||
        Tokens[currentTokenIndex].address === BNB_PLACEHOLDER
      ) {
        try {
          mintWrite ? mintWrite() : alert(`mintWrite is undefined`);
        } catch (error) {
          console.log(`error while minting:  ${error}`);
        }
      } else {
        try {
          approveWrite({
            args: [address, getMaxPayTokenAmount()],
          });
        } catch (error) {
          console.error('mint error: ', error);
        }
      }
    }
  };

  const investmentTypes = {
    toggler: t('nft:type-placeholder'),
    items: [
      {
        name: t('nft:types.t1'),
        address: StakingStrategies[3].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[3].address);
        },
      },
      {
        name: t('nft:types.t2'),
        address: StakingStrategies[0].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[0].address);
        },
      },
      {
        name: t('nft:types.t3'),
        address: StakingStrategies[1].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[1].address);
        },
      },
      {
        name: t('nft:types.t4'),
        address: StakingStrategies[2].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[2].address);
        },
      },
    ],
  };

  return (
    <StyledNft>
      <NftImage src={image} $outOfStock={!!disabled} />
      <NftTitle size={TitleSize.MEDIUM} as={'h3'}>
        {title}
      </NftTitle>
      <NftContent>
        {disabled ? (
          <OutOfStock>{t('nft:oos')}</OutOfStock>
        ) : (
          <>
            <NftProperties>
              <PropertiesItem>
                <PropertiesItemTitle>{t('nft:i-type')}</PropertiesItemTitle>
                <StyledDropdown
                  toggler={investmentTypes?.toggler}
                  items={investmentTypes.items}
                  isValid={mintButtonFirstClick ? isInvestmentTypeValid : true}
                />
              </PropertiesItem>
              <PropertiesItem>
                <PropertiesItemTitle>{t('nft:quantity')}</PropertiesItemTitle>
                <Quantity setExternalState={handlerQuantity} />
              </PropertiesItem>
            </NftProperties>
            <NftPrice>
              <PriceTitle>{t('nft:t-price')}</PriceTitle>
              {Tokens &&
                Tokens.length &&
                Tokens.map((token, index) => (
                  <PriceButton
                    key={index}
                    onClick={() => setCurrentTokenIndex(index)}
                    isActive={currentTokenIndex === index}
                  >
                    {token.name === 'USDT'
                      ? Math.floor(Number(USDTTotalPrice) / 1e18)
                      : null}
                    {token.name === 'ELCT'
                      ? Math.floor(Number(ELECTTotalPrice) / 1e18)
                      : null}
                    {token.name === 'BNB'
                      ? (Number(BNBTotalPrice) / 1e18).toFixed(2)
                      : null}
                    {token.name === 'WBNB'
                      ? (Number(WBNBTotalPrice) / 1e18).toFixed(2)
                      : null}
                    <PriceButtonToken>{token.name}</PriceButtonToken>
                  </PriceButton>
                ))}
            </NftPrice>
          </>
        )}
        <NftBuyButton
          onClick={isLoggedIn ? handleMint : connectWalltet}
          isSmall={true}
          disabled={isApproveLoading || isMinting}
          outOfStock={!!disabled}
        >
          {isApproveLoading ? 'Approving..' : ''}
          {isMinting ? 'Minting..' : ''}
          {mintSuccess && !isApproveLoading ? 'Success' : ''}
          {!isApproveLoading && !isMinting && !mintSuccess && !disabled
            ? t('nft:buy')
            : ''}
          {disabled ? t('nft:soon') : ''}
        </NftBuyButton>
        {disabled ? null : (
          <USTax
            $isUSTaxChecked={isUSTaxChecked}
            $isUsTaxValid={mintButtonFirstClick ? isUSTaxChecked : true}
          >
            <input
              type={'checkbox'}
              onChange={() => setIsUSTaxChecked(!isUSTaxChecked)}
            />
            {t('nft:not-us-tax-resident')}
          </USTax>
        )}
      </NftContent>
    </StyledNft>
  );
};

export default MarketNftItem;
