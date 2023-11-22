import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledMyElectraTokensList = styled.div`
  background-color: ${(props) => props.theme.white};
`;

const TokensList = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

export { StyledMyElectraTokensList, TokensList };
