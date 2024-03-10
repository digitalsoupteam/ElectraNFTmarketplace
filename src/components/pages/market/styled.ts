import styled from 'styled-components';
import Accordion from '../../ui/accordion/accordion';
import Communication from '../../blocks/communication/communication';

const StyledAccordion: any = styled(Accordion)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    position: sticky;
    top: 28px;
    right: 0;
    width: 400px;
    order: 1;
    height: fit-content;
  }
`;

const StyledCommunication = styled(Communication)`
  background-color: ${(props) => props.theme.white};
`;

export { StyledAccordion, StyledCommunication };
