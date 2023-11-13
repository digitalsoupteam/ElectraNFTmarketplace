import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../../../elements/scroll-to-top';
import Header from '../header/header';
import Main from '../../pages/main/main';
import Market from '../../pages/market/market';
import MyElecrta from '../../pages/my-electra/my-electra';
import Footer from '../../layout/footer/footer';
import { useAccount } from 'wagmi';

interface IPageWrapper {
  connectWallet: () => void;
}

const PageWrapper: React.FC<IPageWrapper> = ({ connectWallet }) => {
  const { address, isConnected } = useAccount();

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header
          handlerConnect={connectWallet}
          address={address ? address : ''}
        />
        <Routes>
          <Route
            index
            element={
              <Main isLoggedIn={isConnected} connectWallet={connectWallet} />
            }
          />
          <Route
            path='market'
            element={
              <Market isLoggedIn={isConnected} connectWallet={connectWallet} />
            }
          />
          <Route
            path='my-electra'
            element={
              <MyElecrta
                isLoggedIn={isConnected}
                connectWallet={connectWallet}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PageWrapper;
