import { StyledMarketLoop } from './styled';
import MarketNftItem from '../../ui/market-nft-item/market-nft-item';

interface IMarketLoopItem {
  image: string;
  title: string;
  address?: `0x${string}`;
  abi?: any;
  disabled?: boolean;
}

interface IMarketLoop {
  items: IMarketLoopItem[];
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const MarketLoop: React.FC<IMarketLoop> = ({
  items,
  isLoggedIn,
  connectWallet,
}) => {
  return (
    <StyledMarketLoop>
      {items &&
        items.length &&
        items.map((item, index) => (
          <MarketNftItem
            title={item.title}
            image={item.image}
            address={item.address}
            abi={item.abi}
            key={index}
            disabled={item.disabled}
            isLoggedIn={isLoggedIn}
            connectWalltet={connectWallet}
          />
        ))}
    </StyledMarketLoop>
  );
};

export default MarketLoop;
