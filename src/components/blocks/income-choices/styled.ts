import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';
import Ul from '../../../elements/ul';
import PlusIco from '../../../assets/plus.svg';
import P from '../../../elements/p';
import BottomDecor from '../../../assets/income-choices-bottom.svg';

const StyledIncomeChoices = styled.section`
  padding: 79px 0 454px;
  background-color: ${(props) => props.theme.white};
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 160px 0 106px;
  }
`;

const IncomeChoicesInner = styled.div`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    position: relative;
  }
`;

const IncomeChoicesTitle = styled(Title)`
  padding: 0 17px;
  max-width: 888px;
  margin: 0 auto 182px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 105px;
  }
`;

const IncomeChoiceTopImg = styled(Image)`
  position: absolute;
  width: 385px;
  top: 187px;
  left: -10px;
  margin-bottom: 21px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    z-index: 1;
    top: 163px;
    left: auto;
    right: 2px;
    width: 601px;
    margin: 0;
  }
`;

const StableInvestment = styled.div`
  z-index: 1;
  position: relative;
  padding: 27px 17px 27px 32px;
  border: 1px solid ${(props) => props.theme.diamond};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  background-color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    max-width: 429px;
    padding: 40px 26px 40px 48px;
    left: 53px;
  }
`;

const StableInvestmentTitle = styled(Title)`
  text-align: start;
  margin-bottom: 21px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 31px;
  }
`;

const StableInvestmentList = styled(Ul)`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 21px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 12px 0;
    margin-bottom: 31px;
  }
`;

const StableInvestmentItem = styled.li`
  position: relative;
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.grey};
  padding-left: 31px;
  white-space: pre-wrap;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-size: contain;
    background-image: url(${PlusIco});
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    padding-left: 46px;

    &:before {
      width: 21px;
      height: 21px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 23px;
  }
`;

const Lifespan = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  padding: 157px 37px 80px;
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  background-color: ${(porps) => porps.theme.lightGrey};
  background-image: url(${BottomDecor});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.widePhoneWidth}) {
    max-width: ${(props) => props.theme.contentWidePhoneWidth};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    max-width: ${(props) => props.theme.contentTabletWidth};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    bottom: 70px;
    max-width: 100%;
    padding: 81px 88px 86px 655px;
  }
`;

const LifespanTitle = styled(Title)`
  text-align: start;
  line-height: 130%;
  padding-right: 42px;
  margin-bottom: 9px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    margin-bottom: 13px;
    padding-right: 58px;
  }
`;

const LifespanText = styled(P)`
  color: ${(props) => props.theme.blackPrimary};
  font-size: 15px;
  line-height: 115%;
  padding-right: 60px;
  margin-bottom: 29px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

const PlansList = styled(Ul)`
  display: flex;
  gap: 30px;
  margin-bottom: 29px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 42px;
    margin-bottom: 40px;
  }
`;

const PlansItem = styled.li`
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  flex-grow: 1;
`;

const PlanItemHeader = styled.div`
  display: flex;
  padding: 7px 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 10px 17px;
  }
`;

const PlanTitle = styled(P)`
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.blackPrimary};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
  }
`;

const PlanSubTitle = styled(P)`
  color: ${(props) => props.theme.darkGrey};
  font-size: 11px;
  line-height: 115%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 16px;
  }
`;

const PlanAnnum = styled.div`
  background-color: ${(props) => props.theme.diamond};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 0 0 8px 8px;
  border-top: 1px dashed ${(props) => props.theme.diamon};
  stroke-dasharray: 2px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 10px 19px;
  }
`;

const PlanAnnumTitle = styled(P)`
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
  }
`;

const PlanAnnumText = styled(P)`
  font-size: 12px;
  line-height: 130%;
  color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 16px;
  }
`;

const LifespanBottomText = styled(P)`
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.black};
  padding-right: 60px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
  }
`;

export {
  StyledIncomeChoices,
  IncomeChoicesInner,
  IncomeChoicesTitle,
  IncomeChoiceTopImg,
  StableInvestment,
  StableInvestmentTitle,
  StableInvestmentList,
  StableInvestmentItem,
  ButtonContainer,
  Lifespan,
  LifespanTitle,
  LifespanText,
  PlansList,
  PlansItem,
  PlanItemHeader,
  PlanTitle,
  PlanSubTitle,
  PlanAnnum,
  PlanAnnumTitle,
  PlanAnnumText,
  LifespanBottomText,
};
