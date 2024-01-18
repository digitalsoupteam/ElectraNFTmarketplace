import GlobalStyle from './styled';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
// import { hardhat } from 'wagmi/chains';
// import { mainnet } from 'wagmi/chains';
import { bsc } from 'wagmi/chains';
import config from '../../../config.json';

const App: React.FC = () => {
  const projectId = config.projectId;
  const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'http://localhost:5173/',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  };

  // const chains = [hardhat];
  // const chains = [mainnet];
  const chains = [bsc];
  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  createWeb3Modal({ wagmiConfig, projectId, chains });

  const { open } = useWeb3Modal();

  return (
    <WagmiConfig config={wagmiConfig}>
      <GlobalStyle />
      <PageWrapper connectWallet={() => open()} />
    </WagmiConfig>
  );
};

export default App;
