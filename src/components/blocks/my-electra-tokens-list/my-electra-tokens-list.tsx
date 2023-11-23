import { useState } from 'react';
import {
  StyledMyElectraTokensList,
  TokensList,
  TokenListHeader,
  TokenListHeaderItem,
  HeaderCheckbox,
} from './styled';
import MyElectraNftItem from '../../ui/my-electra-nft-item/my-electra-nft-item';
import Wrapper from '../../../components/layout/wrapper/wrapper';

interface IMyElectraItem {
  date: number;
  nft: string;
  tokenId: number;
  investmentType: string;
  earned: number;
  canClaim: any[];
  canSell: boolean;
  sellingPrice: number;
}

interface IMyElectraTokensList {
  items: IMyElectraItem[][];
}

const MyElectraTokensList: React.FC<IMyElectraTokensList> = ({ items }) => {
  const [checked, setCkecked] = useState(false);

  return (
    <StyledMyElectraTokensList>
      <Wrapper>
        <TokensList>
          <TokenListHeader>
            <tr>
              <TokenListHeaderItem>
                <HeaderCheckbox checked={checked}>
                  <input
                    type={'checkbox'}
                    onChange={() => setCkecked(!checked)}
                  ></input>
                  Select all
                </HeaderCheckbox>
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
      </Wrapper>
    </StyledMyElectraTokensList>
  );
};

export default MyElectraTokensList;
