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
import { t } from 'i18next';

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
            <TokenListHeaderItem>
              {t('my-electra:list.date')}
            </TokenListHeaderItem>
            <TokenListHeaderItem>
              {t('my-electra:list.quantity')}
            </TokenListHeaderItem>
            <TokenListHeaderItem>
              {t('my-electra:list.NFT')}
            </TokenListHeaderItem>
            <TokenListHeaderItem>
              {t('my-electra:list.investment-type')}
            </TokenListHeaderItem>
            <TokenListHeaderItem>
              {t('my-electra:list.earned')}
            </TokenListHeaderItem>
            <TokenListHeaderItem>
              {t('my-electra:list.claim')}
            </TokenListHeaderItem>
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
