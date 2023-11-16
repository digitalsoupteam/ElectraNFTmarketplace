import {
  StyledMarketArchive,
  MarketArchiveInner,
  MarketArchiveTitle,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';

interface IMarketArchive {
  children?: React.ReactNode;
}

const MarketArchive: React.FC<IMarketArchive> = ({ children }) => {
  return (
    <StyledMarketArchive>
      <Wrapper>
        <MarketArchiveInner>
          <MarketArchiveTitle size={TitleSize.MEDIUM} $isDark={true}>
            Buy NFT and earn <ColoredText>passive income</ColoredText>
          </MarketArchiveTitle>
          {children}
        </MarketArchiveInner>
      </Wrapper>
    </StyledMarketArchive>
  );
};

export default MarketArchive;
