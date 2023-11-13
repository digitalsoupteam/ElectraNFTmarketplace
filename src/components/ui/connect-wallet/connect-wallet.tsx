import { StyledConnect } from './styled';

interface IConnectWallet {
  onClick: () => void;
  children?: React.ReactNode;
  isConnected: boolean;
}

const ConnectWallet: React.FC<IConnectWallet> = ({
  onClick,
  children,
  isConnected,
}) => {
  return (
    <StyledConnect onClick={onClick} isConnected={isConnected}>
      {children}
    </StyledConnect>
  );
};

export default ConnectWallet;
