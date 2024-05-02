import React from 'react';

import MetamaskIcon from '../../../assets/metamask.svg?react';
import TrustwalletIcon from '../../../assets/trustwallet.svg?react';

import { IGuideLinkProps, IGuideLinksProps } from './interfaces';
import {
  StyledGuideLinks,
  GuideLinksTitle,
  LinksContainer,
  StyledButton,
} from './styled';

const enum WalletIcons {
  METAMASK = 'metamask',
  TRUSTWALLET = 'trustwallet',
}

const WalletIconsList = {
  [WalletIcons.METAMASK]: <MetamaskIcon />,
  [WalletIcons.TRUSTWALLET]: <TrustwalletIcon />,
};

const GuideLink: React.FC<IGuideLinkProps> = ({ walletIcon, link }) => {
  return (
    <StyledButton link={link} target="_blank">
      {WalletIconsList[walletIcon]}
    </StyledButton>
  );
};

const GuideLinks: React.FC<IGuideLinksProps> = ({
  title,
  links,
  isLight,
  isSmall,
}) => {
  return (
    <StyledGuideLinks $isLight={isLight || false} $isSmall={isSmall || false}>
      <GuideLinksTitle>{title}</GuideLinksTitle>
      <LinksContainer>
        {links &&
          links.length &&
          links.map((linkItem) => (
            <GuideLink
              key={linkItem.link}
              link={linkItem.link}
              walletIcon={linkItem.walletIcon}
            />
          ))}
      </LinksContainer>
    </StyledGuideLinks>
  );
};

export { WalletIcons };
export default GuideLinks;
