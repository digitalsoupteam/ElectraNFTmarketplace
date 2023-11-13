import Hero from '../../blocks/hero/hero';
import HowItWorks from '../../blocks/how-it-works/how-it-works';
import IncomeChoices from '../../blocks/income-choices/income-choices';
import FlexibleInvestment from '../../blocks/flexible-investment/fkexible-investment';
import Communication from '../../blocks/communication/communication';
import Trust from '../../blocks/trust/trust';
import Guarantee from '../../blocks/guarantee/guarantee';
import PromisingMarket from '../../blocks/promising-market/promising-market';
import Micromobility from '../../blocks/micromobility/micromobility';
import BottomCta from '../../blocks/bottom-cta/bottom-cta';

// import { useContractWrite } from 'wagmi';

interface IMain {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Main: React.FC<IMain> = ({ isLoggedIn, connectWallet }) => {
  return (
    <main>
      {/* <button onClick={() => write()}>action</button> */}
      <Hero isLoggedIn={isLoggedIn} connectWallet={connectWallet} />
      <HowItWorks />
      <IncomeChoices />
      <FlexibleInvestment />
      <Communication />
      <Trust />
      <Guarantee />
      <PromisingMarket />
      <Micromobility />
      <BottomCta />
    </main>
  );
};

export default Main;
