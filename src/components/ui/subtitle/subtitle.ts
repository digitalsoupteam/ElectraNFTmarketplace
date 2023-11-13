import styled from 'styled-components';
import P from '../../../elements/p';

interface IStyledSubTitle {
  $isDark?: boolean;
}

const Subtitle = styled(P)<IStyledSubTitle>`
  font-size: 22px;
  line-height: 100%;
  font-weight: 400;
  text-align: center;
  color: ${(props) =>
    props.$isDark ? props.theme.primary : props.theme.basicWhite};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 26px;
  }
`;

export default Subtitle;
