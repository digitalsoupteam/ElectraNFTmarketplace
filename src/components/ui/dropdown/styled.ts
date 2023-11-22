import styled from 'styled-components';
import Button from '../button/button';
import DropdownTogglerIco from '../../../assets/triangle.svg';

const StyledDropdown = styled.div`
  position: relative;
`;

interface IDropdownToggler {
  $isOpened: boolean;
  isValid: boolean;
}

const DropdownToggler = styled(Button)<IDropdownToggler>`
  color: ${(props) => (props.isValid ? 'initial' : props.theme.crimson)};
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  padding: 12px 20px;
  font-size: 16px;
  width: 100%;
  justify-content: space-between;

  &::after {
    content: '';
    display: inline-block;
    width: 19px;
    height: 13px;
    background-image: url(${DropdownTogglerIco});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(${(props) => (props.$isOpened ? '-180deg' : 0)});
    transition: 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.theme.white};
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

const DropdownItem = styled(Button)`
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  padding: 12px 20px;
  font-size: 16px;
  width: 100%;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.white};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 18px;
  }
`;

export {
  StyledDropdown,
  DropdownToggler,
  DropwonListWrapper,
  DropdownList,
  DropdownItem,
};
