import {
  StyledCommunication,
  CommunicationInner,
  CommnunicationTitle,
  CommuncationText,
  StyledSocials,
  CommunicationBottomText,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import { SocialIcons } from '../../ui/socials/socials';

interface ISocialItem {
  img: string;
  link: string;
}

const socials: ISocialItem[] = [
  {
    img: SocialIcons.TELEGRAM,
    link: 'https://t.me/electra_nft',
  },
  {
    img: SocialIcons.TWITTER,
    link: 'https://twitter.com/Electra__NFT',
  },
  {
    img: SocialIcons.DISCORD,
    link: 'https://discord.gg/rFkgyXpB',
  },
];

interface ICommunication {
  className?: string;
}

const Communication: React.FC<ICommunication> = ({ className }) => {
  return (
    <StyledCommunication className={className}>
      <Wrapper>
        <CommunicationInner>
          <CommnunicationTitle size={TitleSize.SMALL} as={'h2'}>
            Do you have any questions?
          </CommnunicationTitle>
          <CommuncationText>
            Feel free to ask:{'\n'}We are always open to communication
          </CommuncationText>
          <StyledSocials
            socials={socials}
            currentColor={'#161616'}
          ></StyledSocials>
          <CommunicationBottomText>
            average response time is 5 min
          </CommunicationBottomText>
        </CommunicationInner>
      </Wrapper>
    </StyledCommunication>
  );
};

export default Communication;
