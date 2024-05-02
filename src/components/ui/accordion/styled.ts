import styled from 'styled-components';
import Button from '../button/button';
import InfoIco from '../../../assets/info-ico.svg';
import ArrowIco from '../../../assets/arrow-accordion.svg';

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 28px;
  }
`;

interface IAccordionButton {
  $isOpened: boolean;
}

const AccordionButton = styled(Button)<IAccordionButton>`
  color: ${(props) => props.theme.blackPrimary};
  text-align: start;
  padding: 13px 13px;
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  background-color: ${(props) => props.theme.lightGrey};
  width: 100%;

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

  &::after {
    content: '';
    display: inline-block;
    margin-left: auto;
    width: 26px;
    height: 9px;
    background-image: url(${ArrowIco});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: ${(props) => (props.$isOpened ? 0.5 : 1)};
    transform: rotate(${(props) => (props.$isOpened ? '-180deg' : 0)});
    transition: 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightGrey};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 29px 20px;
    border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};
    font-size: 24px;
  }
`;

interface IAccordionContentWrapper {
  $height: number;
}

const AccordionContentWrapper = styled.div<IAccordionContentWrapper>`
  height: ${(props) => (props.$height ? props.$height : '0')}px;
  overflow: hidden;
  transition: 0.2s;
`;

const AccordionContent = styled.div`
  color: ${(props) => props.theme.grey};
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 0 0 ${(props) => props.theme.borderRadiusMobileSmall}
    ${(props) => props.theme.borderRadiusMobileSmall};
  padding: 20px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 19px;
  }
`;

export {
  StyledAccordion,
  AccordionButton,
  AccordionContentWrapper,
  AccordionContent,
};
