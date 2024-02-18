import {
  StyledGuarantee,
  GuaranteeInner,
  TextContainer,
  GuaranteeTitle,
  GuranteeText,
  GuarenteeButton,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import { t } from 'i18next';

const Guarantee: React.FC = () => {
  return (
    <StyledGuarantee>
      <Wrapper>
        <GuaranteeInner>
          <TextContainer>
            <GuaranteeTitle size={TitleSize.SMALL}>
              {t('guarantee.t')}
            </GuaranteeTitle>
            <GuranteeText>{t('guarantee.d')}</GuranteeText>
          </TextContainer>
          <GuarenteeButton to={'/market'}>{t('buy-nft-other')}</GuarenteeButton>
        </GuaranteeInner>
      </Wrapper>
    </StyledGuarantee>
  );
};

export default Guarantee;
