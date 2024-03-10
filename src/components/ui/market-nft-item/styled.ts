import styled, { css } from 'styled-components';
import Image from '../../../elements/image';
import { Title } from '../title/title';
import Button from '../button/button';
import P from '../../../elements/p';
import Dropdown from '../dropdown/dropdown';

const StyledNft = styled.div`
  position: relative;
  padding: 15px 15px;
  display: grid;
  gap: 22px;
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 22px 28px;
    grid-template-columns: 324px 1fr;
  }
`;

interface INftImage {
  $outOfStock: boolean;
}
const NftImage = styled(Image)<INftImage>`
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  filter: ${(props) => (props.$outOfStock ? 'grayscale(1)' : null)};
`;

const NftTitle = styled(Title)`
  position: absolute;
  top: 30px;
  left: 30px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: 37px;
    left: 43px;
    font-size: 40px;
  }
`;

const NftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const NftProperties = styled.div`
  border-bottom: 1px dashed ${(props) => props.theme.diamond};
  stroke-dasharray: 10px;
  stroke-dashoffset: 10px;
`;

const PropertiesItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px 23px;
  flex-wrap: wrap;
  margin-bottom: 23px;
`;

const PropertiesItemTitle = styled(P)`
  padding-left: 9px;
  display: inline-block;
  width: fit-content;
  color: ${(props) => props.theme.grey};
  font-size: 24px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 0;
`;

const StyledDropdown = styled(Dropdown)`
  width: 100%;
`;

const NftPrice = styled.div`
  padding: 23px 0 23px 9px;
`;

const PriceTitle = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 6px;
`;

interface IPriceButton {
  isActive: boolean;
}

const PriceButton = styled(Button)<IPriceButton>`
  color: ${(props) =>
    props.isActive ? props.theme.diamond : props.theme.grey};
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  background-color: transparent;
  padding: 0;
  gap: 5px;

  &:not(:last-of-type) {
    margin-right: 30px;
    position: relative;

    &::after {
      content: '/';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      color: #bababa;
      font-size: 20px;
      width: 30px;
      height: 100%;
    }
  }

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.diamond};
  }
`;

const PriceButtonToken = styled.span`
  font-weight: 400;
`;

interface INftBuyButton {
  outOfStock: boolean;
}

const NftBuyButton = styled(Button)<INftBuyButton>`
  width: 100%;
  color: ${(props) => (props.outOfStock ? '#777A7A' : 'initial')};
  background-color: ${(props) =>
    props.outOfStock ? '#BDBDBD' : props.theme.green};

  &:hover {
    color: ${(props) => (props.outOfStock ? '#777A7A' : 'initial')};
    background-color: ${(props) =>
      props.outOfStock ? '#BDBDBD' : props.theme.green};
  }
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
    flex-shrink: 0;
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

const OutOfStock = styled(P)`
  color: #777a7a;
  font-size: 50px;
  font-weight: 600;
  line-height: 115%;
  margin-bottom: 17px;
`;

export {
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
};
