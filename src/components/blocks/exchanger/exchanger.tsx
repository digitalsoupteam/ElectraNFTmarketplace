import { t } from 'i18next';
import React, { useState, useEffect } from 'react';
import {
  useContractRead,
  useContractWrite,
  useWalletClient,
  useBalance,
} from 'wagmi';

import Tokens from '../../../contracts/tokens.json';
import Presale from '../../../contracts/presale.json';

import USDTIco from '../../../assets/usdt-ico.svg?react';
import BNBIco from '../../../assets/bnb-icon.svg?react';
import WBNBIco from '../../../assets/wbnb-icon.svg?react';
import ELCTIco from '../../../assets/elct-icon.svg?react';

import {
  StyledExchanger,
  ExchangeInner,
  ExchangeTitle,
  ExchanerList,
  ExchangerItem,
  ExchangerItemRow,
  TokenIcon,
  StyledDropdown,
  Availability,
  InputContainer,
  Input,
  // MaxBuuton,
  ELCTLabel,
  OrderButton,
  PriceContainer,
  USTax,
} from './styled';

interface IExchanger {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Exchanger: React.FC<IExchanger> = ({ isLoggedIn, connectWallet }) => {
  const BNB_PLACEHOLDER = '0x0000000000000000000000000000000000000000';
  const [activeTokenIndex, setActiveTokenIndex] = useState(0);
  const [payTokenAmountValue, setPayTokenAmountValue] = useState('0');
  const [ELCTAmountValue, setELCTAmountValue] = useState('1000');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [maxPayTokenAmount, setMaxPayTokenAmount] = useState(0n);
  const [isUSTaxChecked, setIsUSTaxChecked] = useState(false);
  const [isStartValidation, setIsStartValidation] = useState(false);
  const [isPaytokenFocused, setIsPaytokenFocused] = useState(false);

  const { data: walletClient } = useWalletClient();

  const filteredTokens = Tokens.filter((token) => token.name !== 'ELCT');

  const items = filteredTokens.map((token, index) => ({
    name: token.name,
    onClick: () => {
      setActiveTokenIndex(index);
    },
  }));

  const balance = useBalance({
    address: walletClient?.account.address,
    token:
      filteredTokens[activeTokenIndex].address === BNB_PLACEHOLDER
        ? undefined
        : (filteredTokens[activeTokenIndex].address as `0x${string}`),
  });

  const getTokenIcon = () => {
    if (filteredTokens[activeTokenIndex].name === 'USDT') {
      return USDTIco;
    }
    if (filteredTokens[activeTokenIndex].name === 'BNB') {
      return BNBIco;
    }
    if (filteredTokens[activeTokenIndex].name === 'WBNB') {
      return WBNBIco;
    }
    if (filteredTokens[activeTokenIndex].name === 'ELCT') {
      return ELCTIco;
    }

    return USDTIco;
  };

  const getSlippage = () => {
    let slippage = '0';

    if (filteredTokens[activeTokenIndex].name === 'ELCT') {
      slippage = import.meta.env.VITE_ETH_SLIPPAGE;
    }

    if (filteredTokens[activeTokenIndex].name === 'USDT') {
      slippage = import.meta.env.VITE_USDT_SLIPPAGE;
    }

    if (filteredTokens[activeTokenIndex].name === 'BNB') {
      slippage = import.meta.env.VITE_BNB_SLIPPAGE;
    }

    if (filteredTokens[activeTokenIndex].name === 'WBNB') {
      slippage = import.meta.env.VITE_WBNB_SLIPPAGE;
    }

    return parseFloat(slippage);
  };

  const getNormalizedPrice = (price: number) => {
    if (filteredTokens[activeTokenIndex].name === 'USDT') {
      return price.toFixed(2);
    } else {
      return price.toFixed(7);
    }
  };

  const { data: fetchedPayTokenAmount } = useContractRead({
    address: Presale.address as `0x${string}`,
    abi: Presale.abi,
    functionName: 'elctAmountToToken',
    args: [
      BigInt(Number(ELCTAmountValue) * 1e18),
      filteredTokens[activeTokenIndex].address,
    ],
    watch: true,
  });

  const { data: checkAllowance } = useContractRead({
    address:
      filteredTokens[activeTokenIndex].name === 'BNB'
        ? undefined
        : (filteredTokens[activeTokenIndex].address as `0x${string}`),
    abi: filteredTokens[activeTokenIndex].abi,
    functionName: 'allowance',
    args: [walletClient?.account.address, Presale.address],
    onError: (error) => {
      console.error(error);
    },
    watch: true,
  });

  const { write: approveWrite } = useContractWrite({
    address: filteredTokens[activeTokenIndex].address as `0x${string}`,
    abi: filteredTokens[activeTokenIndex].abi,
    functionName: 'approve',
    account: walletClient?.account,
    args: [Presale.address, maxPayTokenAmount],
    onSuccess: () => {
      buy();
    },
  });

  const { write: buy } = useContractWrite({
    address: Presale.address as `0x${string}`,
    abi: Presale.abi,
    functionName: 'buy',
    account: walletClient?.account,
    args: [
      BigInt(Number(ELCTAmountValue) * 1e18),
      filteredTokens[activeTokenIndex].address,
      maxPayTokenAmount,
    ],
    value:
      filteredTokens[activeTokenIndex].address === BNB_PLACEHOLDER
        ? maxPayTokenAmount
        : undefined,
    onError: (error) => {
      alert(error);
    },
  });

  const handlerPayTokenInput = (evt: any) => {
    const target = evt.target;
    const enteredValue = target.value;
    const clearedValue = enteredValue.replace(/[^0-9.,]/g, '');

    setPayTokenAmountValue(clearedValue);
    const ELCTAmount = (Number(clearedValue) / Number(currentPrice)).toFixed(2);
    setELCTAmountValue(String(ELCTAmount));
  };

  const handlerELCTAmountInput = (evt: any) => {
    const target = evt.target;
    const enteredValue = target.value;
    const clearedValue = enteredValue.replace(/[^0-9.,]/g, '');

    setELCTAmountValue(clearedValue);
  };

  const handlePaytokenFocus = () => {
    setIsPaytokenFocused(true);
  };

  const handlePaytokenBlur = () => {
    setIsPaytokenFocused(false);
  };

  const handleOrderButton = () => {
    setIsStartValidation(true);

    if (!isUSTaxChecked) {
      return;
    }

    if (filteredTokens[activeTokenIndex].address === BNB_PLACEHOLDER) {
      buy();
    } else {
      if (
        typeof checkAllowance === 'bigint' &&
        checkAllowance >= maxPayTokenAmount
      ) {
        buy();
      } else {
        approveWrite();
      }
    }
  };

  useEffect(() => {
    if (typeof fetchedPayTokenAmount === 'bigint') {
      const normalizedPayTokenAmount = getNormalizedPrice(
        Number(fetchedPayTokenAmount) / 1e18
      );

      if (!isPaytokenFocused) {
        setPayTokenAmountValue(normalizedPayTokenAmount);
      }

      const slippage = getSlippage();

      const maxPaytokenAmount =
        fetchedPayTokenAmount +
        (fetchedPayTokenAmount / BigInt(100)) *
          (BigInt(slippage * 1e18) / BigInt(1e18));

      setMaxPayTokenAmount(maxPaytokenAmount);

      const estimatedPrice =
        Number(fetchedPayTokenAmount) /
        Number(BigInt(Number(ELCTAmountValue) * 1e18));

      if (estimatedPrice) {
        setCurrentPrice(Number(estimatedPrice));
      }
    }
  }, [fetchedPayTokenAmount]);

  return (
    <StyledExchanger>
      <ExchangeInner>
        <ExchangeTitle>{t('menu:exchange')}</ExchangeTitle>
        <ExchanerList>
          <ExchangerItem>
            <ExchangerItemRow>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TokenIcon>{React.createElement(getTokenIcon())}</TokenIcon>
                <StyledDropdown
                  items={items}
                  isValid={true}
                  $isExchange={true}
                />
              </div>
              <InputContainer>
                <Input
                  type="number"
                  inputMode="decimal"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  placeholder="0.0"
                  value={payTokenAmountValue}
                  onFocus={handlePaytokenFocus}
                  onBlur={handlePaytokenBlur}
                  onChange={handlerPayTokenInput}
                ></Input>
                {/* <MaxBuuton
                  onClick={() => {
                    setPayTokenAmount(Number(balance.data?.formatted));
                    setELCTAmount(
                      Number(balance.data?.formatted) / currentPrice
                    );
                  }}
                >
                  Max
                </MaxBuuton> */}
              </InputContainer>
            </ExchangerItemRow>
            <Availability>
              {t('my-electra:availability')}:{' '}
              <span>{balance.data?.formatted} </span>
              <span>{filteredTokens[activeTokenIndex].name}</span>
            </Availability>
          </ExchangerItem>
          <div>{Tokens[activeTokenIndex].name}</div>
          <ExchangerItem>
            <ExchangerItemRow>
              <ELCTLabel>
                <TokenIcon>
                  <ELCTIco />
                </TokenIcon>{' '}
                ELCT:
              </ELCTLabel>
              <Input
                type={'number'}
                inputMode="decimal"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                placeholder="0.0"
                onChange={handlerELCTAmountInput}
                value={ELCTAmountValue}
              ></Input>
            </ExchangerItemRow>
          </ExchangerItem>
        </ExchanerList>
        <PriceContainer>
          <div>
            <span style={{ fontWeight: '600' }}>{t('exchange:price')}: </span>
          </div>
          <div>
            <span style={{ fontWeight: '600' }}>
              {getNormalizedPrice(currentPrice)}{' '}
            </span>
            <span>{filteredTokens[activeTokenIndex].name} </span>
            <span>{t('my-electra:per')} ELCT</span>
          </div>
        </PriceContainer>
        <div style={{ color: '#000', marginBottom: '20px' }}>
          Slippage: {getSlippage()}%
        </div>
        <OrderButton
          isSmall={true}
          onClick={isLoggedIn ? handleOrderButton : connectWallet}
        >
          {t('menu:exchange')}
        </OrderButton>
        <USTax
          $isUSTaxChecked={isUSTaxChecked}
          $isUsTaxValid={isStartValidation ? isUSTaxChecked : true}
        >
          <input
            type={'checkbox'}
            onChange={() => setIsUSTaxChecked(!isUSTaxChecked)}
          />
          {t('nft:not-us-tax-resident')}
        </USTax>
      </ExchangeInner>
    </StyledExchanger>
  );
};

export default Exchanger;
