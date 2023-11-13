import styled from 'styled-components';
import Ul from '../../../elements/ul';
import P from '../../../elements/p';
import StarIco from '../../../assets/star.svg';

const StyledStarCardList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 27px 24px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

const StarCard = styled.li`
  position: relative;
  padding: 19px 14px 15px;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};

  &:before {
    content: '';
    position: absolute;
    top: -18px;
    left: -17px;
    width: 33px;
    height: 36px;
    background-image: url(${StarIco});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 32px 23px 27px;
    border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};

    &:before {
      top: -30px;
      left: -28px;
      width: 55px;
      height: 60px;
    }
  }
`;

const CardTitle = styled.h3`
  color: ${(props) => props.theme.blackPrimary};
  font-size: 15px;
  line-height: 120%;
  font-weight: 600;
  margin: 0 0 9px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 25px;
    margin: 0 0 14px;
  }
`;

const CardText = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 12px;
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
  }
`;

export { StyledStarCardList, StarCard, CardTitle, CardText };
