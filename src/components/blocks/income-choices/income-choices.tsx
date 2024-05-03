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
import { t } from 'i18next';

const IncomeChoices: React.FC = () => {
  return (
    <StyledIncomeChoices>
      <Wrapper>
        <IncomeChoicesInner>
          <IncomeChoicesTitle size={TitleSize.MEDIUM} $isDark={true} as={'h2'}>
            {t('income-choices.t1')}{' '}
            <ColoredText>{t('income-choices.t2')}</ColoredText>
          </IncomeChoicesTitle>
          <IncomeChoiceTopImg src={IncomeChoiceTopImgSrc} />
          <StableInvestment>
            <StableInvestmentTitle
              size={TitleSize.MEDIUM}
              $isDark={true}
              as={'h3'}
            >
              <ColoredText>{t('income-choices.first-block.t1')} </ColoredText>
              {t('income-choices.first-block.t2')}
            </StableInvestmentTitle>
            <StableInvestmentList>
              <StableInvestmentItem>
                {t('income-choices.first-block.list.i1.text1')}{' '}
                <ColoredText>
                  {t('income-choices.first-block.list.i1.text2')}
                  {'\n'}
                </ColoredText>
                {t('income-choices.first-block.list.i1.text3')}.
              </StableInvestmentItem>
              <StableInvestmentItem>
                {t('income-choices.first-block.list.i2.text1')}{' '}
                <ColoredText>
                  {t('income-choices.first-block.list.i2.text2')}.
                </ColoredText>
              </StableInvestmentItem>
              <StableInvestmentItem>
                {t('income-choices.first-block.list.i3.text1')}
                <ColoredText>
                  {t('income-choices.first-block.list.i3.text2')}{' '}
                </ColoredText>{' '}
                {t('income-choices.first-block.list.i1.text3')}.
              </StableInvestmentItem>
              <StableInvestmentItem>
                {t('income-choices.first-block.list.i4.text1')}{' '}
                <ColoredText>
                  {t('income-choices.first-block.list.i4.text2')}{' '}
                </ColoredText>{' '}
                {t('income-choices.first-block.list.i4.text3')}
              </StableInvestmentItem>
              <StableInvestmentItem>
                {t('income-choices.first-block.list.i5.text1')}{' '}
                <ColoredText>
                  {t('income-choices.first-block.list.i5.text2')}.
                </ColoredText>
              </StableInvestmentItem>
            </StableInvestmentList>
            <ButtonContainer>
              <Button isSmall={true} to={'/market'}>
                {t('buy-nft-one')}
              </Button>
              <Button
                isSmall={true}
                isAlt={true}
                link={'https://discord.gg/RsGyxRXQ9E'}
                target={'_blank'}
              >
                {t('get-help')}
              </Button>
            </ButtonContainer>
          </StableInvestment>
          <Lifespan>
            <LifespanTitle size={TitleSize.EXTRA_SMALL} $isDark={true}>
              <ColoredText>{t('income-choices.second-block.t1')}</ColoredText>{' '}
              {t('income-choices.second-block.t2')}
            </LifespanTitle>
            <LifespanText>{t('income-choices.second-block.d')}</LifespanText>
            <PlansList>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>2 {t('years')}</PlanTitle>
                  <PlanSubTitle>{t('gives-you')}</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>4%</PlanAnnumTitle>
                  <PlanAnnumText>{t('per-annum')}</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>3 {t('years')}</PlanTitle>
                  <PlanSubTitle>{t('gives-you')}</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>8%</PlanAnnumTitle>
                  <PlanAnnumText>{t('per-annum')}</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
              <PlansItem>
                <PlanItemHeader>
                  <PlanTitle>5 {t('years-five')}</PlanTitle>
                  <PlanSubTitle>{t('gives-you')}</PlanSubTitle>
                </PlanItemHeader>
                <PlanAnnum>
                  <PlanAnnumTitle>12%</PlanAnnumTitle>
                  <PlanAnnumText>{t('per-annum')}</PlanAnnumText>
                </PlanAnnum>
              </PlansItem>
            </PlansList>
            <LifespanBottomText>
              {t('income-choices.second-block.p')}
            </LifespanBottomText>
          </Lifespan>
        </IncomeChoicesInner>
      </Wrapper>
    </StyledIncomeChoices>
  );
};

export default IncomeChoices;
