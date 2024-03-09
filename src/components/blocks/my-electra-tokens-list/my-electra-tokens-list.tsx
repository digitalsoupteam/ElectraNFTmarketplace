// import { useState } from 'react';
import {
  StyledMyElectraTokensList,
  TokensList,
  TokenListHeader,
  TokenListHeaderItem,
  // HeaderCheckbox,
} from './styled';
import MyElectraNftItem, {
  IMyElectraItem,
} from '../../ui/my-electra-nft-item/my-electra-nft-item';

interface IMyElectraTokensList {
  items: IMyElectraItem[][];
}

const MyElectraTokensList: React.FC<IMyElectraTokensList> = ({ items }) => {
  // const [checked, setCkecked] = useState(false);

  return (
    <StyledMyElectraTokensList>
      <TokensList>
        <TokenListHeader>
          <tr>
            <TokenListHeaderItem>
              {/* <HeaderCheckbox checked={checked}>
                <input
                  type={'checkbox'}
                  onChange={() => setCkecked(!checked)}
                ></input>
                Select all
              </HeaderCheckbox> */}
            </TokenListHeaderItem>
            <TokenListHeaderItem>Date </TokenListHeaderItem>
            <TokenListHeaderItem>Quantity </TokenListHeaderItem>
            <TokenListHeaderItem>NFT </TokenListHeaderItem>
            <TokenListHeaderItem>Investment type </TokenListHeaderItem>
            <TokenListHeaderItem>Earned </TokenListHeaderItem>
            <TokenListHeaderItem>You can claim </TokenListHeaderItem>
          </tr>
        </TokenListHeader>
        <tbody>
          {items &&
            items.length &&
            items.map((item, index) => (
              <MyElectraNftItem item={item} key={index} />
            ))}
        </tbody>
      </TokensList>
    </StyledMyElectraTokensList>
  );
};

export default MyElectraTokensList;
