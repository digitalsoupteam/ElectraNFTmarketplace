import {
  StyledPromisingMarket,
  PromisingMarketInner,
  PromisingMarketTitle,
  PromisingMarketText,
  PromisingMarketList,
  Card,
  CardTitle,
  CardText,
  CardTextDecorated,
  StyledImage,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';
import PromiseMarketImage from '../../../assets/promising-market-img.png';
import { t } from 'i18next';

interface IPromisingMarketItems {
  title: string;
  text: string;
  decorated_text: string;
}

const PromisingMarket: React.FC = () => {
  const promisingMarketItems: IPromisingMarketItems[] = [
    {
      title: t('promising-market.cards-block-first.i1.t'),
      text: t('promising-market.cards-block-first.i1.d1'),
      decorated_text: t('promising-market.cards-block-first.i1.d2'),
    },
    {
      title: t('promising-market.cards-block-first.i2.t'),
      text: t('promising-market.cards-block-first.i2.d1'),
      decorated_text: t('promising-market.cards-block-first.i2.d2'),
    },
  ];

  return (
    <StyledPromisingMarket>
      <Wrapper>
        <PromisingMarketInner>
          <div>
            <PromisingMarketTitle
              size={TitleSize.MEDIUM}
              $isDark={true}
              as={'h2'}
            >
              {t('promising-market.t1')}{' '}
              <ColoredText>{t('promising-market.t2')}</ColoredText>{' '}
              {t('promising-market.t3')}
            </PromisingMarketTitle>
            <PromisingMarketText>
              {t('promising-market.d')}.
            </PromisingMarketText>
            <PromisingMarketList>
              {promisingMarketItems &&
                promisingMarketItems.length &&
                promisingMarketItems.map((item, index) => (
                  <Card key={index}>
                    <CardTitle size={TitleSize.EXTRA_SMALL}>
                      {item.title}
                    </CardTitle>
                    <CardText>
                      {item.text}{' '}
                      <CardTextDecorated>
                        {item.decorated_text}
                      </CardTextDecorated>
                    </CardText>
                  </Card>
                ))}
            </PromisingMarketList>
          </div>
          <StyledImage src={PromiseMarketImage} />
        </PromisingMarketInner>
      </Wrapper>
    </StyledPromisingMarket>
  );
};

export default PromisingMarket;
