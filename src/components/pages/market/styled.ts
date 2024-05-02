import styled from 'styled-components';
import Communication from '../../blocks/communication/communication';

const StyledCommunication = styled(Communication)`
  background-color: ${(props) => props.theme.white};
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    position: sticky;
    top: 28px;
    right: 0;
    width: 400px;
    order: 1;
    height: fit-content;
  }
`;

export { StyledCommunication, SideBar };
