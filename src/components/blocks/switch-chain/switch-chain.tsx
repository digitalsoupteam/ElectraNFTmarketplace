import { FC } from 'react';
import { useNetwork } from 'wagmi';
import { useSwitchNetwork } from 'wagmi';

import { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';

import {
  StyledSwitchChain,
  Inner,
  SwitchChainTitle,
  ConnectedTo,
} from './styled';

const SwitchChain: FC = () => {
  const { chain } = useNetwork();
  const { chains, isLoading, switchNetwork } = useSwitchNetwork();

  return (
    <StyledSwitchChain $isShow={chain?.unsupported ? true : false}>
      <Inner>
        <SwitchChainTitle size={TitleSize.MEDIUM} as="h3">
          Unsupported chain
        </SwitchChainTitle>
        <ConnectedTo>Connected to: {chain?.name}</ConnectedTo>
        {chains &&
          chains.length &&
          chains.map((item) => (
            <Button
              isSmall={true}
              onClick={() => switchNetwork?.(item.id)}
              key={item.id}
            >
              {isLoading
                ? 'Switching.. (check your wallet)'
                : `Switch to ${item.name}`}
            </Button>
          ))}
      </Inner>
    </StyledSwitchChain>
  );
};

export default SwitchChain;
