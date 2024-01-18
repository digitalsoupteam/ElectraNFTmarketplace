import { ExchangeList, Item, ItemTitle, ItemText } from './styled';

interface IExchangeFatureItem {
  title: string;
  text: string;
  ico: string;
}

interface IExchangeFeatureList {
  features: IExchangeFatureItem[];
}

const ExchangeFeatureList: React.FC<IExchangeFeatureList> = ({ features }) => {
  return (
    <ExchangeList>
      {features.map((item, index) => (
        <Item key={index} $ico={item.ico}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemText>{item.text}</ItemText>
        </Item>
      ))}
    </ExchangeList>
  );
};

export default ExchangeFeatureList;
