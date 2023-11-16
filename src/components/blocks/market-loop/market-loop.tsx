import { StyledMarketLoop } from './styled';
import MarketNftItem from '../../ui/market-nft-item/market-nft-item';

interface IMarketLoopItem {
  image: string;
  title: string;
}

interface IMarketLoop {
  items: IMarketLoopItem[];
}

const MarketLoop: React.FC<IMarketLoop> = ({ items }) => {
  return (
    <StyledMarketLoop>
      {items &&
        items.length &&
        items.map((item, index) => (
          <MarketNftItem title={item.title} image={item.image} key={index} />
        ))}
    </StyledMarketLoop>
  );
};

export default MarketLoop;
