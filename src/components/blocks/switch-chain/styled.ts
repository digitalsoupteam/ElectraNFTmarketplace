import styled from 'styled-components';

import { Title } from '../../ui/title/title';

interface StyledSwitchChain {
  $isShow: boolean;
}

const StyledSwitchChain = styled.section<StyledSwitchChain>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 300px;
  max-width: 500px;
  border-radius: ${(props) => props.theme.borderRadiusMobileLarge};
  background-color: ${(porps) => porps.theme.white};
`;

const SwitchChainTitle = styled(Title)`
  color: ${(porps) => porps.theme.black};
  margin-bottom: 20px;
`;

const ConnectedTo = styled.div`
  color: ${(porps) => porps.theme.black};
  margin-bottom: 20px;
`;

export { StyledSwitchChain, Inner, SwitchChainTitle, ConnectedTo };
