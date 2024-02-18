import {
  StyledMarketArchive,
  MarketArchiveTitle,
  MarketArchiveInner,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';
import { t } from 'i18next';

interface IMarketArchive {
  children?: React.ReactNode;
}

const MarketArchive: React.FC<IMarketArchive> = ({ children }) => {
  return (
    <StyledMarketArchive>
      <Wrapper>
        <MarketArchiveTitle size={TitleSize.MEDIUM} $isDark={true}>
          {t('nft:t2')} <ColoredText>{t('nft:pi')}</ColoredText>
        </MarketArchiveTitle>
        <MarketArchiveInner>{children}</MarketArchiveInner>
      </Wrapper>
    </StyledMarketArchive>
  );
};

export default MarketArchive;
