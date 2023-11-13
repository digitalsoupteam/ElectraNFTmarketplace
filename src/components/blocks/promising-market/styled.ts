import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import P from '../../../elements/p';
import Ul from '../../../elements/ul';
import Image from '../../../elements/image';

const StyledPromisingMarket = styled.section`
  padding: 31px 0 21px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 75px 0 55px;
  }
`;

const PromisingMarketInner = styled.div`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: grid;
    grid-template-columns: 1fr 650px;
    gap: 40px;
  }
`;

const PromisingMarketTitle = styled(Title)`
  padding-right: 78px;
  text-align: start;
  margin-bottom: 17px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 23px;
  }
`;

const PromisingMarketText = styled(P)`
  color: ${(props) => props.theme.grey};
  line-height: 120%;
  margin-bottom: 33px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    margin-bottom: 29px;
  }
`;

const PromisingMarketList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 24px;
    margin-bottom: 0;
  }
`;

const Card = styled.li`
  background-color: ${(props) => props.theme.white};
  padding: 12px;
  border-radius: ${(props) => props.theme.borderRadiusMobileMedium};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusDesktopMedium};
    padding: 20px;
  }
`;

const CardTitle = styled(Title)`
  text-align: start;
  color: ${(props) => props.theme.blackPrimary};
  margin-bottom: 5px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 8px;
  }
`;

const CardText = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 11px;
  line-height: 120%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 18px;
  }
`;
const CardTextDecorated = styled.span`
  text-decoration: underline;
`;

const StyledImage = styled(Image)`
  border-radius: ${(props) => props.theme.borderRadiusMobileLarge};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  }
`;

export {
  StyledPromisingMarket,
  PromisingMarketInner,
  PromisingMarketTitle,
  PromisingMarketText,
  PromisingMarketList,
  Card,
  CardTitle,
  CardText,
  CardTextDecorated,
  StyledImage,
};
