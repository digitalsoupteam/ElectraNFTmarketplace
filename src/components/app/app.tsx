import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import GlobalStyle from './styled';

import { bsc } from 'wagmi/chains';
import { Suspense, StrictMode } from 'react';

const metadata = {
  name: 'Web3Modal',
  description: '',
  url: window.location.hostname,
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const projectId = import.meta.env.VITE_WEB_3_MODAL_KEY;
const chains = [bsc]; // [localhost, bsc];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

const App: React.FC = () => {
  const { open } = useWeb3Modal();

  return (
    <StrictMode>
      <Suspense fallback="loading...">
        <WagmiConfig config={wagmiConfig}>
          <GlobalStyle />
          <PageWrapper connectWallet={() => open()} />
        </WagmiConfig>
      </Suspense>
    </StrictMode>
  );
};

export default App;
