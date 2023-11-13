import styled from 'styled-components';

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 16px;
  }
`;

export { SocialsContainer };
