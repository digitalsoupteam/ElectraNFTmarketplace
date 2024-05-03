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
import { t } from 'i18next';

const FlexibleInvestment: React.FC = () => {
  return (
    <StyledFlexibleInvestment>
      <Wrapper>
        <FlexibleInvestmentInner>
          <FlexibleInvestmentTitle size={TitleSize.MEDIUM} $isDark={true}>
            {t('flexible-investment.t1')}{' '}
            <StyledColoredtext>{t('flexible-investment.t2')}</StyledColoredtext>
          </FlexibleInvestmentTitle>
          <FlexibleInvestmentList>
            <FlexibleInvestmentItem>
              {t('flexible-investment.list.i1')}
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              {t('flexible-investment.list.i2')}
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              {t('flexible-investment.list.i3')}
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              {t('flexible-investment.list.i4')}
            </FlexibleInvestmentItem>
            <FlexibleInvestmentItem>
              {t('flexible-investment.list.i5')}
            </FlexibleInvestmentItem>
          </FlexibleInvestmentList>
          <ButtonContainer>
            <StyledBuyButton isSmall={true} to={'/market'}>
              {t('buy-nft-one')}
            </StyledBuyButton>
            <StyledMoreButton
              isSmall={true}
              link={'https://discord.gg/RsGyxRXQ9E'}
              target={'_blank'}
            >
              {t('get-help')}
            </StyledMoreButton>
          </ButtonContainer>
        </FlexibleInvestmentInner>
      </Wrapper>
      <BottomTextContainer>
        <Wrapper>
          <BottomText>{t('flexible-investment.p')}</BottomText>
        </Wrapper>
      </BottomTextContainer>
    </StyledFlexibleInvestment>
  );
};

export default FlexibleInvestment;
