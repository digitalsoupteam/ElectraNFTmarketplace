import styled from 'styled-components';
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

const NftImage = styled(Image)`
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
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

const NftContent = styled.div``;

const NftProperties = styled.div``;

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

  &:hover {
    background-color: transparent;
  }
`;

const PriceButtonToken = styled.span`
  font-weight: 400;
`;

const PriceSeparator = styled.span`
  color: #bababa;
  font-size: 20px;
  position: relative;
  top: -4px;

  &:last-of-type {
    display: none;
  }
`;

const NftBuyButton = styled(Button)`
  width: 100%;
`;

const USTax = styled.div`
  color: #bababa;
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
  PriceSeparator,
  NftBuyButton,
  USTax,
};
