import {
  StyledFlexibleInvestment,
  FlexibleInvestmentInner,
  FlexibleInvestmentTitle,
  StyledColoredtext,
  FlexibleInvestmentList,
  FlexibleInvestmentItem,
  ButtonContainer,
  StyledBuyButton,
  StyledMoreButton,
  BottomTextContainer,
  BottomText,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';

const FlexibleInvestment: React.FC = () => {
  return (
    <StyledFlexibleInvestment>
      <Wrapper>
        <FlexibleInvestmentInner>
          <FlexibleInvestmentTitle size={TitleSize.MEDIUM} $isDark={true}>
            Flexible <StyledColoredtext>Investment</StyledColoredtext>
          </FlexibleInvestmentTitle>
          <FlexibleInvestmentList>
            <FlexibleInvestmentItem>
              Your income depends on how much the e-vehicle earns each month
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              After choosing this type of investment, you receive 12% annual
              returns for the first four months (during this time, we brand the
              equipment, place it in profitable cities, and put it into
              operation).
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              When the equipment enters operation, you start receiving 50% of
              its income every month
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              This type of investment is riskier, but your annual income can
              reach 100%
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              If desired, you can sell your NFT, but unlike a fixed investment,
              the selling price will be net of the maintenance costs
            </FlexibleInvestmentItem>
          </FlexibleInvestmentList>
          <ButtonContainer>
            <StyledBuyButton isSmall={true}>Buy NFT</StyledBuyButton>
            <StyledMoreButton isSmall={true}>Video guide</StyledMoreButton>
          </ButtonContainer>
        </FlexibleInvestmentInner>
      </Wrapper>
      <BottomTextContainer>
        <Wrapper>
          <BottomText>
            In reality, all you need to do is buy an NFT to start receiving a
            fixed income from a real business every month!
          </BottomText>
        </Wrapper>
      </BottomTextContainer>
    </StyledFlexibleInvestment>
  );
};

export default FlexibleInvestment;
