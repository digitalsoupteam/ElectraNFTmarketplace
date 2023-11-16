import styled from 'styled-components';
import Accordion from '../../ui/accordion/accordion';

const StyledAccordion = styled(Accordion)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    position: absolute;
    top: 93px;
    right: 0;
    width: 400px;
  }
`;

export { StyledAccordion };
