import styled, { css, keyframes } from 'styled-components';
import Image from '../../../elements/image';
import Tick from '../../../assets/tick.svg';
import Button from '../button/button';
import PriceTriangle from '../../../assets/price-triangle.svg';

const fadeout = keyframes`
    form{
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const StyledMyElectraNftItem = styled.tr`
  color: ${(props) => props.theme.black};
  margin-bottom: 20px;
`;

const ItemCell = styled.td`
  padding: 12px 23px 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;

  &:first-child {
    padding-left: 34px;
  }

  &:last-child {
    text-align: start;
  }
`;

const ItemImg = styled(Image)`
  border-radius: 8px;
  width: 69px;
`;

interface IItemCheckbox {
  checked: boolean;
}

const ItemCheckbox = styled.label<IItemCheckbox>`
  cursor: pointer;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    border: 1px solid #bdbdbd;
    transition: all 0.2s;

    ${(props) =>
      props.checked
        ? css`
            border: 1px solid ${(props) => props.theme.diamond};
            background-image: url(${Tick});
            background-position: center;
            background-repeat: no-repeat;
            background-color: ${(props) => props.theme.diamond};
          `
        : null}
  }

  input {
    display: none;
  }
`;

const Reward = styled.span`
  color: ${(props) => props.theme.diamond};
  font-weight: 600;
  margin-right: 34px;
`;

interface IClaimButton {
  disabled: boolean;
}

const ClaimButton = styled(Button)<IClaimButton>`
  display: ${(props) => (props.disabled ? 'none' : '')};
  padding: 10px 18px;
  font-size: 18px;
  margin-right: 6px;
`;

const SellingPriceContainer = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  bottom: calc(100% + 14px);
  left: 0;
  right: 0;
  padding: 4px 13px 10px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.grey};
  font-size: 13px;
  font-weight: 400;
  line-height: 115%;
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 27px;
    height: 14px;
    bottom: -7px;
    left: 0;
    right: 0;
    background-image: url(${PriceTriangle});
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
`;

const SellButton = styled(Button)`
  position: relative;
  display: ${(props) => (props.disabled ? 'none' : '')};
  background-color: ${(props) => props.theme.diamond};
  padding: 10px 18px;
  font-size: 18px;

  &:hover ${SellingPriceContainer} {
    display: flex;
    flex-direction: column;
    gap: 5px;
    animation-name: ${fadeout};
    animation-fill-mode: forwards;
    animation-duration: 0.2s;
  }
`;

const SellingPriceAmount = styled.div`
  font-weight: 600;
  line-height: 100%;
`;

export {
  StyledMyElectraNftItem,
  ItemCell,
  ItemImg,
  ItemCheckbox,
  Reward,
  ClaimButton,
  SellButton,
  SellingPriceContainer,
  SellingPriceAmount,
};
