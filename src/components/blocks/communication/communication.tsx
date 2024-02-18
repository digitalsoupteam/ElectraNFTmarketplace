import {
  StyledCommunication,
  CommunicationInner,
  CommunicationTitle,
  CommunicationText,
  StyledSocials,
  CommunicationBottomText,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import { SocialIcons } from '../../ui/socials/socials';
import { t } from 'i18next';

interface ISocialItem {
  img: string;
  link: string;
}

interface ICommunication {
  className?: string;
}

const Communication: React.FC<ICommunication> = ({ className }) => {
  const socials: ISocialItem[] = [
    {
      img: SocialIcons.TELEGRAM,
      link: 'https://t.me/+dGR6vwpEbRNlMTU6',
    },
    {
      img: SocialIcons.TWITTER,
      link: 'https://twitter.com/electra_elct',
    },
    {
      img: SocialIcons.DISCORD,
      link: 'https://discord.gg/PgpMjgTJ',
    },
  ];

  return (
    <StyledCommunication className={className}>
      <Wrapper>
        <CommunicationInner>
          <CommunicationTitle size={TitleSize.SMALL} as={'h2'}>
            {t('communication.t1')}?
          </CommunicationTitle>
          <CommunicationText>
            {t('communication.p1')}:{'\n'}
            {t('communication.p2')}
          </CommunicationText>
          <StyledSocials
            socials={socials}
            currentColor={'#161616'}
          ></StyledSocials>
          <CommunicationBottomText>
            {t('communication.average-response')}
          </CommunicationBottomText>
        </CommunicationInner>
      </Wrapper>
    </StyledCommunication>
  );
};

export default Communication;
