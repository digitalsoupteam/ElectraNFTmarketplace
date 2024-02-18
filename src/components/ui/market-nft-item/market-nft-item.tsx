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
import {
  useContractRead,
  useContractWrite,
  // usePrepareContractWrite,
  useWalletClient,
} from 'wagmi';
import { TitleSize } from '../title/title';
import Quantity from '../quantity/quantity';
import Tokens from '../../../contracts/tokens.json';
import Treasury from '../../../contracts/treasury.json';
import StakingStrategies from '../../../contracts/stakingStrategies.json';
import { encodeFunctionData } from 'viem';
import { t } from 'i18next';

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
  const [currentIvnestmentType, setCurrentIvnestmentType] = useState('');
  const [isInvestmentTypeValid, setIsInvestmentTypeValid] = useState(false);
  const [isUSTaxChecked, setIsUSTaxChecked] = useState(false);
  const [mintButtonFirstClick, setMintButtonFirstClick] = useState(false);
  const [USDPrice, setUSDPrice] = useState(0n);
  const [USDTPrice, setUSDTPrice] = useState(0n);
  const [USDTTotalPrice, setUSDTotalPrice] = useState(0n);
  const [ELECTPrice, setELECTPrice] = useState(0n);
  const [ELECTTotalPrice, setELECTotalPrice] = useState(0n);
  const [quantity, setQuantity] = useState(1);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [encodedMintMulticallData, setEncodedMintMulticallData] = useState<
    `0x${string}`[] | string
  >('0x');

  const { data: walletClient } = useWalletClient();

  useEffect(() => {
    setUSDTotalPrice(BigInt(quantity) * USDTPrice);
    setELECTotalPrice(BigInt(quantity) * ELECTPrice);
  }, [quantity, USDTPrice, ELECTPrice]);

  const handlerQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const investmentTypes = {
    toggler: t('nft:type-placeholder'),
    items: [
      {
        type: t('nft:types.t1'),
        address: StakingStrategies[3].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[3].address);
        },
      },
      {
        type: t('nft:types.t2'),
        address: StakingStrategies[0].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[0].address);
        },
      },
      {
        type: t('nft:types.t3'),
        address: StakingStrategies[1].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[1].address);
        },
      },
      {
        type: t('nft:types.t4'),
        address: StakingStrategies[2].address,
        onClick: () => {
          setIsInvestmentTypeValid(true);
          setCurrentIvnestmentType(StakingStrategies[2].address);
        },
      },
    ],
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
  // const { config: mintConfig } = usePrepareContractWrite();

  const {
    write: mintWrite,
    isLoading: isMinting,
    isSuccess: mintSuccess,
  } = useContractWrite({
    address: address,
    abi: abi,
    functionName: 'mint',
    account: walletClient?.account,
    args: [currentIvnestmentType, Tokens[currentTokenIndex].address, '0x'],
  });

  // const { config: mintMulticallConfig } = usePrepareContractWrite();

  const {
    write: mintMulticall,
    isLoading: isMulticallMinting,
    isSuccess: multicallMintSuccess,
  } = useContractWrite({
    address: address,
    abi: abi,
    functionName: 'multicall',
    account: walletClient?.account,
    args: [encodedMintMulticallData],
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
        if (quantity > 1) {
          mintMulticall ? mintMulticall() : alert(`mintMulticall is undefined`);
        } else {
          mintWrite ? mintWrite() : alert(`mintWrite is undefined`);
        }
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
      if (quantity > 1) {
        const encodedMintMulticallArray = Array.from({ length: quantity }, () =>
          encodeFunctionData({
            abi: abi,
            functionName: 'mint',
            args: [
              currentIvnestmentType,
              Tokens[currentTokenIndex].address,
              '0x',
            ],
          })
        );

        setEncodedMintMulticallData(encodedMintMulticallArray);
      }

      if (
        typeof checkAllowance === 'bigint'
          ? checkAllowance >= currentTokenPrice
          : false
      ) {
        try {
          if (quantity > 1) {
            mintMulticall?.();
          } else {
            mintWrite ? mintWrite() : alert(`mintWrite is undefined`);
          }
        } catch (error) {
          console.log(`error while minting:  ${error}`);
        }
      } else {
        try {
          // Если апрува нет
          approveWrite({
            args: [address, currentTokenPrice],
          });
        } catch (error) {
          console.error('mint error: ', error);
        }
      }
    }
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
                  toggler={investmentTypes.toggler}
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
          {isMinting || isMulticallMinting ? 'Minting..' : ''}
          {(mintSuccess || multicallMintSuccess) && !isApproveLoading
            ? 'Success'
            : ''}
          {!isApproveLoading &&
          !isMinting &&
          !mintSuccess &&
          !isMulticallMinting &&
          !multicallMintSuccess &&
          !disabled
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
