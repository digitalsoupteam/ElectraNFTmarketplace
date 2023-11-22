import { StyledMyElectraTokensList, TokensList } from './styled';
import Wrapper from '../../../components/layout/wrapper/wrapper';

interface IMyElectraItem {
  date: number;
  nft: number;
  investmentType: number;
  earned: number;
  canClaim: any[];
  canSell: boolean;
  sellingPrice: number;
}

interface IMyElectraTokensList {
  items: IMyElectraItem[][];
}

const MyElectraTokensList: React.FC<IMyElectraTokensList> = ({ items }) => {
  const tokenStakingStrategies = [
    {
      name: '4% stable for 2 years',
      address: '0x0E01d5cb9e4209FF6363f8D34C6c5E93606426c1',
    },
    {
      name: '4% stable for 3 years',
      address: '0xC07Ceb2388dc531B95872165Ea52a35135CA7281',
    },
    {
      name: '4% stable for 5 years',
      address: '0xB5B975d8B6Cc55C9015723EF616fE1B6f920F6BF',
    },
    {
      name: '50% flex',
      address: '0x0d68B752F019B8766173c3965Bd6a0970f6FD331',
    },
  ];

  const formateDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day.toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${year.toString().slice(-2)}`;
    return formattedDate;
  };

  const getStakingStrategyName = (address: string) => {
    const matchedStrategy = tokenStakingStrategies.find((item) => {
      return address === String(item.address);
    });

    return matchedStrategy?.name;
  };

  const estimateTotalClaimForItem = (item: IMyElectraItem[]) => {
    let total = 0;
    item.forEach((item) => {
      total += Number(item.canClaim[0]);
    });
    return total;
  };

  const estimateEarnedForItem = (item: IMyElectraItem[]) => {
    let total = 0;
    item.forEach((item) => {
      total += Number(item.earned);
    });
    return total;
  };

  console.log(items);
  return (
    <Wrapper>
      <StyledMyElectraTokensList>
        <TokensList />
        <div
          style={{
            color: '#000',
            marginBottom: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 1fr)',
            gap: '10px',
          }}
        >
          <div>Select all</div>
          <div>Date </div>
          <div>Quantity </div>
          <div>NFT </div>
          <div>Investment type </div>
          <div>Earned </div>
          <div>You can claim </div>
        </div>
        {items &&
          items.length &&
          items.map((item, index) => (
            <div
              style={{
                color: '#000',
                marginBottom: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(9, 1fr)',
                gap: '20px',
              }}
              key={index}
            >
              {item.length === 1 ? (
                <>
                  <div>checkbox</div>
                  <div>
                    {item[0].date ? formateDate(Number(item[0].date)) : ''}
                  </div>
                  <div>{item.length}</div>
                  <div>{item[0].nft ? String(item[0].nft) : ''}</div>
                  <div>
                    {item[0].investmentType
                      ? getStakingStrategyName(String(item[0].investmentType))
                      : ''}
                  </div>
                  <div>
                    {typeof item[0].earned !== 'undefined'
                      ? Number(item[0].earned)
                      : ''}
                  </div>
                  <div>
                    <span>
                      {item[0].canClaim ? Number(item[0].canClaim[0]) : ''}
                    </span>
                    <button disabled={item[0].canClaim[0] === 0n}>Claim</button>
                    <button disabled={!item[0].canSell}>Sell</button>
                    <span>
                      {item[0].sellingPrice
                        ? Number(item[0].sellingPrice) / 1e18
                        : ''}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div>checkbox</div>
                  <div>
                    {item[0].date ? formateDate(Number(item[0].date)) : ''}
                  </div>
                  <div>{item.length}</div>
                  <div>{item[0].nft ? String(item[0].nft) : ''}</div>
                  <div>
                    {item[0].investmentType
                      ? getStakingStrategyName(String(item[0].investmentType))
                      : ''}
                  </div>
                  <div>
                    {typeof item[0].earned !== 'undefined'
                      ? estimateEarnedForItem(item)
                      : ''}
                  </div>
                  <div>
                    <span>
                      {item[0].canClaim ? estimateTotalClaimForItem(item) : ''}
                    </span>
                    <button disabled={item[0].canClaim[0] === 0n}>Claim</button>
                    <button disabled={!item[0].canSell}>Sell</button>
                    <span>
                      {item[0].sellingPrice
                        ? Number(item[0].sellingPrice) / 1e18
                        : ''}
                      {'$'}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
      </StyledMyElectraTokensList>
    </Wrapper>
  );
};

export default MyElectraTokensList;
