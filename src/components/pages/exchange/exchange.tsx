interface IExchange {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Exchange: React.FC<IExchange> = () => {
  return <main>exchange</main>;
};

export default Exchange;
