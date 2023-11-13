import { StyledStarCardList, StarCard, CardTitle, CardText } from './styled';

interface ICards {
  title: string;
  text: string;
}

interface IStarCardList {
  cards: ICards[];
}

const StarCardList: React.FC<IStarCardList> = ({ cards }) => {
  return (
    <StyledStarCardList>
      {cards &&
        cards.length &&
        cards.map((item, index) => (
          <StarCard key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </StarCard>
        ))}
    </StyledStarCardList>
  );
};

export default StarCardList;
