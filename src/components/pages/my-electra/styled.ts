import styled from 'styled-components';
import Communication from '../../blocks/communication/communication';

const StyledCommunication = styled(Communication)`
  background-color: ${(props) => props.theme.white};
`;

export { StyledCommunication };
