import styled, { css } from 'styled-components';
import ExchangeBg from '../../../assets/exchange-bg.png';
import Dropdown from '../../ui/dropdown/dropdown';
import P from '../../../elements/p';
import Button from '../../ui/button/button';

const StyledExchanger = styled.section`
  background-color: ${(props) => props.theme.diamond};
  border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  background-image: url(${ExchangeBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left top;
  padding: 270px 0 0;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    background-position: left top;
    padding: 34px 33px 32px 579px;
  }
  /* min-height: 732px; */
`;

const ExchangeInner = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  padding: 30px 15px;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 39px 30px;
  }
`;

const ExchangeTitle = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 30px;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 45px;
  }
`;

const ExchanerList = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px dashed ${(props) => props.theme.diamond};
  margin-bottom: 20px;
`;

const ExchangerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const ExchangerItemRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 11px;
  border-radius: ${(props) => props.theme.borderRadiusMobileMedium};
  background-color: ${(props) => props.theme.lightGrey};

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadiusDesktopMedium};
    flex-direction: row;
  }
`;

const TokenIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropdown = styled(Dropdown)`
  background-color: transparent;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    width: 137px;
  }
`;

const Availability = styled.div`
  color: #bababa;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 40px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  padding: 26px 13px;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme.grey};
  border: none;
  border-radius: ${(props) => props.theme.borderRadiusMobileMedium};
  width: 100%;
  box-sizing: border-box;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const MaxBuuton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  background: none;
  border: none;
  padding: 10px;
  font-size: 24px;
  line-height: 130%;
  font-weight: 600;
  color: ${(props) => props.theme.diamond};
  background-color: white;
`;

const ELCTLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  color: ${(props) => props.theme.grey};
`;

const OrderButton = styled(Button)`
  width: 100%;
`;

const PriceContainer = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.grey};
  margin-bottom: 20px;
`;

interface IUStax {
  $isUSTaxChecked: boolean;
  $isUsTaxValid: boolean;
}

const USTax = styled.label<IUStax>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isUsTaxValid ? '#bababa' : props.theme.crimson)};
  transition: all 0.2s;
  margin-top: 8px;

  input {
    display: none;
  }

  &::before {
    ${(props) =>
      props.$isUSTaxChecked
        ? css`
            content: '✓';
          `
        : css`
            content: '';
          `};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 1px solid #bababa;
    color: ${(props) =>
      props.$isUsTaxValid ? '#bababa' : props.theme.crimson};
    border-radius: 3px;
    margin-right: 9px;
    transition: all 0.2s;
  }
`;

export {
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
  MaxBuuton,
  ELCTLabel,
  OrderButton,
  PriceContainer,
  USTax,
};
