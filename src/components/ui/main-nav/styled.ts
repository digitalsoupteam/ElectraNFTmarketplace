import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledMainNav = styled(Ul)<{ $isHeader: boolean }>`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    width: fit-content;
    padding: 13px 0;
    margin: 0;
    gap: 60px;
    align-items: flex-start;
  }
`;

export { StyledMainNav };
