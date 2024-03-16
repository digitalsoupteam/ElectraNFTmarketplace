import styled from 'styled-components';
import Ul from '../../../elements/ul';
import P from '../../../elements/p';

const ExchangeList = styled(Ul)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 35px;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    gap: 45px;
  }
`;

interface IItem {
  $ico: string;
}

const Item = styled.li<IItem>`
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  display: flex;
  flex-direction: column;
  padding: 70px 32px 40px;
  background-image: url(${(props) => props.$ico});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 120px auto;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    width: 100%;
  }
`;

const ItemTitle = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 30px;
  font-weight: 600;
  line-height: 120%;
`;

const ItemText = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  white-space: pre-wrap;
  padding-right: 100px;
`;

export { ExchangeList, Item, ItemTitle, ItemText };
