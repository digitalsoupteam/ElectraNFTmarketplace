import styled from 'styled-components';
import Button from '../button/button';

interface IMenuLink {
  children?: React.ReactNode;
  onClick?: () => void;
  isDark: boolean;
  isDecorated?: boolean;
}

const MenuLink = styled(Button)<IMenuLink>`
  color: ${(props) =>
    props.isDark ? props.theme.darkGrey : props.theme.lightGrey};
  font-size: 16px;
  line-height: 100%;
  font-weight: 400;
  padding: 0;
  background-color: transparent;
  border: none;
  text-decoration: ${(props) => (props.isDecorated ? 'underline' : null)};

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.green};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: ${(props) => (props.isDark ? '16px' : '20px')};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { MenuLink };
