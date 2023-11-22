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

const Guarantee: React.FC = () => {
  return (
    <StyledGuarantee>
      <Wrapper>
        <GuaranteeInner>
          <TextContainer>
            <GuaranteeTitle size={TitleSize.SMALL}>
              We do not make unrealistic promises
            </GuaranteeTitle>
            <GuranteeText>
              but we guarantee stable profits derived from real business
            </GuranteeText>
          </TextContainer>
          <GuarenteeButton to={'/market'}>Buy NFTs</GuarenteeButton>
        </GuaranteeInner>
      </Wrapper>
    </StyledGuarantee>
  );
};

export default Guarantee;
