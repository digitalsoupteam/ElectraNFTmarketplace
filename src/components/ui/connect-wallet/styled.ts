import styled from 'styled-components';
import Button from '../button/button';
import LoginImg from '../../../assets/login.svg';

interface IStyledConnect {
  isConnected: boolean;
}

const StyledConnect = styled(Button)<IStyledConnect>`
  display: flex;
  gap: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.green};
  background-color: transparent;
  background-size: 25px;
  background-image: url(${(props) => (props.isConnected ? null : LoginImg)});
  padding: 13px 12px;
  background-repeat: no-repeat;
  background-position: 0 center;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    color: ${(props) => props.theme.diamond};
    background-color: transparent;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    background-position: 21px center;
    background-size: '25px';
    padding: ${(props) =>
      props.isConnected ? '0 12px' : '13px 12px 13px 56px'};
    font-size: 20px;
    margin: 0;
  }
`;

export { StyledConnect };
