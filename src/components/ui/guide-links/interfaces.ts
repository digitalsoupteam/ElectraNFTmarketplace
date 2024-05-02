import { WalletIcons } from './guide-links';

export interface IGuideLinkProps {
  walletIcon: WalletIcons;
  link: string;
}

export interface IGuideLinksProps {
  title: string;
  isLight?: boolean;
  isSmall?: boolean;
  links: IGuideLinkProps[];
}
