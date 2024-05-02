import styled from 'styled-components';

import Button from '../button/button';
import InfoIco from '../../../assets/info-ico.svg';

const StyledButton = styled(Button)`
  padding: 5px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 10px;
  }
`;

const GuideLinksTitle = styled.div`
  display: flex;
  color: ${(props) => props.theme.blackPrimary};
  text-align: start;
  align-items: center;
  font-size: 20px;
  line-height: 100%;

  &::before {
    content: '';
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: ${(props) => props.theme.green};
    border-radius: 50%;
    margin-right: 20px;
    background-image: url(${InfoIco});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 4px 21px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
  }
`;

interface IStyledGuideLinks {
  $isLight: boolean;
  $isSmall: boolean;
}

const StyledGuideLinks = styled.div<IStyledGuideLinks>`
  background-color: ${(props) =>
    props.$isLight ? props.theme.white : '#f4f4f4'};
  padding: ${(props) => (props.$isSmall ? '8px 15px' : '13px')};
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;

  ${StyledButton} {
    width: ${(props) => (props.$isSmall ? '30px' : '40px')};
    height: ${(props) => (props.$isSmall ? '30px' : '40px')};
    background-color: ${(props) =>
      props.$isLight ? '#f4f4f4' : props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.diamond};
    }
  }

  ${GuideLinksTitle} {
    &::before {
      width: ${(props) => (props.$isSmall ? '30px' : '48px')};
      height: ${(props) => (props.$isSmall ? '30px' : '48px')};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: ${(props) => (props.$isSmall ? '8px 15px' : '15px 20px')};

    ${StyledButton} {
      width: ${(props) => (props.$isSmall ? '40px' : '50px')};
      height: ${(props) => (props.$isSmall ? '40px' : '50px')};
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export { StyledGuideLinks, GuideLinksTitle, LinksContainer, StyledButton };
