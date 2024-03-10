import styled, { css } from 'styled-components';
import Button from '../button/button';
import DropdownTogglerIco from '../../../assets/triangle.svg';
import Arrow from '../../../assets/arrow-thin.svg';

interface IStyledDropdown {
  isExchange?: boolean;
}

const StyledDropdown = styled.div<IStyledDropdown>`
  position: relative;
  background-color: ${(props) =>
    props.isExchange ? 'transparent' : props.theme.white};
`;

interface IDropdownToggler {
  $isOpened: boolean;
  isValid: boolean;
  isExchange?: boolean;
}

const Descriptor = styled.span`
  color: #bababa;
  padding-left: 20px;
`;

const DropdownToggler = styled(Button)<IDropdownToggler>`
  color: ${(props) => (props.isValid ? 'initial' : props.theme.crimson)};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  padding: ${(props) => (props.isExchange ? '1px 20px' : '12px 20px')};
  font-size: 16px;
  width: 100%;
  background-color: ${(props) =>
    props.isExchange ? 'transparent' : props.theme.white};
  justify-content: space-between;
  text-align: start;

  &::after {
    content: '';
    display: inline-block;
    width: 19px;
    height: 13px;
    // eslint-disable-next-line no-use-before-define
    background-image: url(${(props) =>
      props.isExchange ? Arrow : DropdownTogglerIco});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(${(props) => (props.$isOpened ? '-180deg' : 0)});
    transition: 0.2s;
  }

  ${(props) =>
    props.isExchange
      ? css`
          &::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%)
              rotate(${props.$isOpened ? '-180deg' : 0});
            right: 20px;
          }
        `
      : css`
          &::after {
            rotate(props.$isOpened ? '-180deg': 0);
            position: static;
          }
        `};

  &:hover {
    background-color: ${(props) =>
      props.isExchange ? 'transparent' : props.theme.white};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 18px;
  }
`;

interface IDropdownListWrapper {
  $height: number;
}

const DropwonListWrapper = styled.div<IDropdownListWrapper>`
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: ${(props) => (props.$height ? props.$height : 0)}px;
  overflow: hidden;
  transition: 0.2s;
`;

const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  gap: 10px;
`;

interface IDropdownItem {
  isExchange?: boolean;
}

const DropdownItem = styled(Button)<IDropdownItem>`
  background-color: ${(props) =>
    props.isExchange ? 'transparent' : props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  padding: 12px 20px;
  font-size: 16px;
  width: 100%;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) =>
      props.isExchange ? 'transparent' : props.theme.white};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 18px;
  }
`;

export {
  StyledDropdown,
  Descriptor,
  DropdownToggler,
  DropwonListWrapper,
  DropdownList,
  DropdownItem,
};
