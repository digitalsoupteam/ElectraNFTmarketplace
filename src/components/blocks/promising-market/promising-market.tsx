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

interface IPromisingMarketItems {
  title: string;
  text: string;
  decorated_text: string;
}

const promisingMarketItems: IPromisingMarketItems[] = [
  {
    title: 'up to 70% urban population ',
    text: 'uses micromobility sharing daily, according to ',
    decorated_text: 'McKinsey research',
  },
  {
    title: '+61% rides growth per year',
    text: 'according to ',
    decorated_text: 'National Association of City Transportation Officials',
  },
];

const PromisingMarket: React.FC = () => {
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
              A <ColoredText>promising market</ColoredText> for investment
            </PromisingMarketTitle>
            <PromisingMarketText>
              Cities around the world are adopting greener and smarter
              transportation solutions. Sharing electric vehicles are quickly
              becoming the go-to choice for urban dwellers, creating a vast
              market for investors like you.
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
                      {item.text}
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
