import {
  StyledIncomeChoices,
  IncomeChoicesInner,
  IncomeChoicesTitle,
  IncomeChoiceTopImg,
  StableInvestment,
  StableInvestmentTitle,
  StableInvestmentList,
  StableInvestmentItem,
  ButtonContainer,
  Lifespan,
  LifespanTitle,
  LifespanText,
  PlansList,
  PlansItem,
  PlanItemHeader,
  PlanTitle,
  PlanSubTitle,
  PlanAnnum,
  PlanAnnumTitle,
  PlanAnnumText,
  LifespanBottomText,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';
import IncomeChoiceTopImgSrc from '../../../assets/income-choices-moto.png';
import Button from '../../ui/button/button';

const IncomeChoices: React.FC = () => {
  return (
    <StyledIncomeChoices>
      <Wrapper>
        <IncomeChoicesInner>
          <IncomeChoicesTitle size={TitleSize.MEDIUM} $isDark={true} as={'h2'}>
            Purchasing NFTs allows you to{' '}
            <ColoredText>select from various income options</ColoredText>
          </IncomeChoicesTitle>
          <IncomeChoiceTopImg src={IncomeChoiceTopImgSrc} />
          <StableInvestment>
            <StableInvestmentTitle
              size={TitleSize.MEDIUM}
              $isDark={true}
              as={'h3'}
            >
              <ColoredText>Stable </ColoredText>Investment
            </StableInvestmentTitle>
            <StableInvestmentList>
              <StableInvestmentItem>
                You choose a stable <ColoredText>fixed{'\n'}income</ColoredText>{' '}
                from your e-vehicle.
              </StableInvestmentItem>
              <StableInvestmentItem>
                This income is confirmed by a{'\n'}smart contract and provides
                {'\n'}money <ColoredText>every month.</ColoredText>
              </StableInvestmentItem>
              <StableInvestmentItem>
                You can buy multiple NFTs, selecting{'\n'}
                <ColoredText>different investment types</ColoredText> for
                various{'\n'}durations.
              </StableInvestmentItem>
              <StableInvestmentItem>
                Afterward, you can{' '}
                <ColoredText>withdraw your{'\n'}profit</ColoredText> from your
                personal account{'\n'}on the website.
              </StableInvestmentItem>
              <StableInvestmentItem>
                Upon the expiration of the NFT,{'\n'}you receive the{' '}
                <ColoredText>full value back.</ColoredText>
              </StableInvestmentItem>
            </StableInvestmentList>
            <ButtonContainer>
              <Button isSmall={true} to={'/market'}>
                Buy NFT
              </Button>
              <Button
                isSmall={true}
                isAlt={true}
                link={'https://discord.gg/PgpMjgTJ'}
                target={'_blank'}
              >
                Get help
              </Button>
            </ButtonContainer>
          </StableInvestment>
          <Lifespan>
            <LifespanTitle size={TitleSize.EXTRA_SMALL} $isDark={true}>
              <ColoredText>You can choose</ColoredText> different returns based
              on the lifespan of the NFT
            </LifespanTitle>
            <LifespanText>
              For example, buying an NFT for $10,000 can yield you $1,200
              annually
            </LifespanText>
            <PlansList>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>2 years</PlanTitle>
                  <PlanSubTitle>gives you</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>4%</PlanAnnumTitle>
                  <PlanAnnumText>per annum</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>3 years</PlanTitle>
                  <PlanSubTitle>gives you</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>8%</PlanAnnumTitle>
                  <PlanAnnumText>per annum</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>5 years</PlanTitle>
                  <PlanSubTitle>gives you</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>12%</PlanAnnumTitle>
                  <PlanAnnumText>per annum</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
            </PlansList>
            <LifespanBottomText>
              At the end of the NFT's lifespan, the money you spent on its
              purchase is returned to you!
            </LifespanBottomText>
          </Lifespan>
        </IncomeChoicesInner>
      </Wrapper>
    </StyledIncomeChoices>
  );
};

export default IncomeChoices;
