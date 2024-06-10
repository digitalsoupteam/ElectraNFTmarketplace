import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledConnect } from './styled';
import { MetaMaskAvatar } from 'react-metamask-avatar';

interface IConnectWallet {
  onClick: () => void;
  address: string;
}

const ConnectWallet: React.FC<IConnectWallet> = ({ onClick, address }) => {
  const formattedAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };
  const { t } = useTranslation();

  return (
    <StyledConnect onClick={onClick} isConnected={!!address}>
      {address ? <MetaMaskAvatar address={address} size={30} /> : null}
      {address ? formattedAddress(address) : t('menu:c-w')}
    </StyledConnect>
  );
};

export default ConnectWallet;
