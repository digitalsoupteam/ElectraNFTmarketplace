import styled from 'styled-components';
import Button from '../button/button';
import LoginImg from '../../../assets/login.svg';

interface IStyledConnect {
  isConnected: boolean;
}

const StyledConnect = styled(Button)<IStyledConnect>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${(props) => (props.isConnected ? '10px' : '10px 30px 10px 60px')};
  background-color: #323232;
  border-radius: 27px;
  border: 1px solid #424242;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  background-size: 25px;
  background-image: url(${(props) => (props.isConnected ? null : LoginImg)});
  background-repeat: no-repeat;
  background-position: left center;
  width: fit-content;

  &:hover {
    color: ${(props) => props.theme.diamond};
    background-color: transparent;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    background-position: 21px center;
    background-size: 25px;
    font-size: 20px;
    margin: 0;
  }
`;

export { StyledConnect };
