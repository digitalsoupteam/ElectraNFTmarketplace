import { t } from 'i18next';
import React, { useState } from 'react';
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

const Exchanger: React.FC = () => {
  const BNB_PLACEHOLDER = '0x0000000000000000000000000000000000000000';
  const [activeTokenIndex, setActiveTokenIndex] = useState(0);
  const [payTokenAmount, setPayTokenAmount] = useState(0);
  const [ELCTAmount, setELCTAmount] = useState(1000);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [maxPayTokenAmount, setMaxPayTokenAmount] = useState(0n);
  const [isUSTaxChecked, setIsUSTaxChecked] = useState(false);
  const [isStartValidation, setIsStartValidation] = useState(false);

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
    args: [BigInt(ELCTAmount * 1e18), filteredTokens[activeTokenIndex].address],
    watch: true,
    onSuccess: () => {
      console.log('fetchedPayTokenAmount', fetchedPayTokenAmount);

      if (typeof fetchedPayTokenAmount === 'bigint') {
        setPayTokenAmount(Number(fetchedPayTokenAmount) / 1e18);

        const slippage = getSlippage();
        const maxPaytokenAmount =
          fetchedPayTokenAmount +
          (fetchedPayTokenAmount / BigInt(100)) *
            (BigInt(slippage * 1e18) / BigInt(1e18));
        console.log('maxPayTokenAmount', maxPayTokenAmount);
        setMaxPayTokenAmount(maxPaytokenAmount);

        const estimatedPrice =
          Number(fetchedPayTokenAmount) / Number(BigInt(ELCTAmount * 1e18));
        setCurrentPrice(Number(estimatedPrice));
      }
    },
  });

  const { data: checkAllowance } = useContractRead({
    address: filteredTokens[activeTokenIndex].address as `0x${string}`,
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
    args: ['0xC326829b88d6D62C62Db254f118d35E34c7b02Fb', maxPayTokenAmount],
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
      BigInt(ELCTAmount * 1e18),
      filteredTokens[activeTokenIndex].address,
      maxPayTokenAmount,
    ],
    value:
      filteredTokens[activeTokenIndex].address === BNB_PLACEHOLDER
        ? maxPayTokenAmount
        : undefined,
  });

  const handlerPayTokenInput = (evt: any) => {
    console.log('pay input');
    const target = evt.target;
    const value = parseFloat(target.value);

    setPayTokenAmount(value);
    const newELCTAmount = value / currentPrice;
    console.log('newELCTAmount', newELCTAmount, typeof newELCTAmount);
    console.log(value, currentPrice, value / currentPrice);
    setELCTAmount(newELCTAmount);
  };

  const handlerELCTAmountInput = (evt: any) => {
    console.log('elct input');
    const target = evt.target;
    const value = parseFloat(target.value);

    if (value > 0) {
      setELCTAmount(value);
    }
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

  return (
    <StyledExchanger>
      <ExchangeInner>
        <ExchangeTitle>Exchange</ExchangeTitle>
        <ExchanerList>
          <ExchangerItem>
            <ExchangerItemRow>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TokenIcon>{React.createElement(getTokenIcon())}</TokenIcon>
                <StyledDropdown
                  items={items}
                  isValid={true}
                  isExchange={true}
                />
              </div>
              <InputContainer>
                <Input
                  type={'number'}
                  value={payTokenAmount}
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
              Availability: <span>{balance.data?.formatted} </span>
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
                onChange={handlerELCTAmountInput}
                value={ELCTAmount}
              ></Input>
            </ExchangerItemRow>
          </ExchangerItem>
        </ExchanerList>
        <PriceContainer>
          <div>
            <span style={{ fontWeight: '600' }}>Price: </span>
          </div>
          <div>
            <span style={{ fontWeight: '600' }}>
              {getNormalizedPrice(currentPrice)}{' '}
            </span>
            <span>{filteredTokens[activeTokenIndex].name} </span>
            <span>per ELCT</span>
          </div>
        </PriceContainer>
        <OrderButton isSmall={true} onClick={handleOrderButton}>
          Exchange
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
