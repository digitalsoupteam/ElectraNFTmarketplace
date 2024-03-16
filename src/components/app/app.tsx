import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import GlobalStyle from './styled';

// if you need[hardhat, mainnet] - just import here...
// for example: import { hardhat, bsc } from 'wagmi/chains';
import { hardhat } from 'wagmi/chains';
import { Suspense, StrictMode } from 'react';

const getUrl = () =>
  window.location.protocol +
  window.location.hostname +
  (window.location.port ? `:${window.location.port}` : '');

const metadata = {
  name: 'Web3Modal',
  description: '',
  url: String(getUrl),
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};
const projectId = import.meta.env.VITE_WEB_3_MODAL_KEY;
const chains = [hardhat]; // [hardhat, bsc];
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
