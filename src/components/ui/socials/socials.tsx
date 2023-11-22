import { SocialsContainer } from './styled';
import SocialButton from '../../ui/social-button/social-button';
import TelegramIco from '../../../assets/telegram.svg?react';
import TwitterIco from '../../../assets/twitter.svg?react';
import DiscordIco from '../../../assets/discord.svg?react';
import InstagramIco from '../../../assets/instagram.svg?react';
import FacebookIco from '../../../assets/facebook.svg?react';
import TiktokIco from '../../../assets/tiktok.svg?react';

interface ISocialItem {
  img: string;
  link: string;
}

interface ISocials {
  socials?: ISocialItem[];
  currentColor: string;
  className?: string;
  light?: boolean;
}

interface IIcons {
  [key: string]: React.ReactNode;
}

const enum SocialIcons {
  TELEGRAM = 'telegram',
  TWITTER = 'twitter',
  DISCORD = 'discord',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok',
}

const icons: IIcons = {
  [SocialIcons.TELEGRAM]: <TelegramIco />,
  [SocialIcons.TWITTER]: <TwitterIco />,
  [SocialIcons.DISCORD]: <DiscordIco />,
  [SocialIcons.INSTAGRAM]: <InstagramIco />,
  [SocialIcons.FACEBOOK]: <FacebookIco />,
  [SocialIcons.TIKTOK]: <TiktokIco />,
};

const Socials: React.FC<ISocials> = ({
  socials,
  className,
  currentColor,
  light,
}) => {
  return (
    <SocialsContainer className={className}>
      {socials &&
        socials.length &&
        socials.map((item, index) => (
          <SocialButton
            key={index}
            link={item.link}
            currentColor={currentColor}
            light={light}
            target='_blank'
          >
            {icons[item.img]}
          </SocialButton>
        ))}
    </SocialsContainer>
  );
};

export { Socials, SocialIcons };
