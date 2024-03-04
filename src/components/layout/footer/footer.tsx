import Wrapper from '../../layout/wrapper/wrapper';
import AppButton from '../../ui/app-button/app-button';
import { Socials } from '../../ui/socials/socials';
import {
  Copyright,
  FooterAppButtons,
  FooterButton,
  FooterInner,
  FooterLogo,
  FooterNav,
  StyledFooter,
} from './styled';
import AppStoreIco from '../../../assets/appstore.svg?react';
import GooglePlayIco from '../../../assets/googleplay.svg?react';
import langs, { ILanguageOption } from '../../../i18n/langs';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

interface IMenuItems {
  title: React.ReactNode;
  link?: string;
  to?: string;
  isDecorated?: boolean;
}

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const menuItems: IMenuItems[] = [
    {
      title: 'support@electra.space',
      link: 'mailto:support@electra.space',
      isDecorated: true,
    },
    {
      title: t('footer:pp'),
      to: '/',
    },
  ];

  const createLanguageOptions = (): any => {
    return Object.keys(langs).map((lang) => ({
      options: [
        {
          value: lang,
          label: lang.toUpperCase(),
        },
      ],
    }));
  };

  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>
          <FooterLogo isLink />
          <FooterAppButtons>
            <AppButton
              link="https://apps.apple.com/kg/app/electra/id1548675057"
              target="_blank"
            >
              <AppStoreIco />
            </AppButton>
            <AppButton
              link="https://play.google.com/store/apps/details?id=space.electra&hl=en&gl=US"
              target="_blank"
            >
              <GooglePlayIco />
            </AppButton>
          </FooterAppButtons>
          <Socials currentColor={'#000'} light />
          <div style={{ margin: 'auto 0' }}>
            <Select
              defaultValue={i18n.language}
              value={i18n.language}
              options={createLanguageOptions()}
              placeholder={i18n.language.toUpperCase()}
              isClearable={false}
              isSearchable={false}
              onChange={(event) => {
                const selectedLanguage = (event as unknown as ILanguageOption)
                  .value;
                i18n.changeLanguage(selectedLanguage);
                document.documentElement.lang = selectedLanguage;
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  neutral50: '#fff',
                },
              })}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: '#bcf085',
                  backgroundColor: 'transparent',
                  fontSize: '14px',
                  cursor: 'pointer',
                }),
                menu: (styles) => ({
                  ...styles,
                  backgroundColor: 'rgb(164, 162, 162)',
                  borderColor: 'black',
                  overflow: 'hidden',
                }),
                menuList: (styles) => ({
                  ...styles,
                  backgroundColor: 'black',
                  border: '1px solid white',
                  borderRadius: '5px',
                  padding: '0px',
                }),

                option: (styles, { isDisabled, isFocused, isSelected }) => {
                  return {
                    ...styles,
                    color: 'white',
                    border: isSelected
                      ? '1px solid white'
                      : '1px solid transparent',
                    borderRadius: '5px',
                    fontSize: '14px',
                    padding: '5px',
                    textAlign: 'center',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    background: isFocused ? '#161616' : 'black',
                  };
                },
              }}
            />
          </div>
          <FooterButton link="https://t.me/+dGR6vwpEbRNlMTU6" target="_blank">
            {t('footer:support-chat')}
          </FooterButton>

          <FooterNav menuItems={menuItems} isDark={true} />
          <Copyright>Electra © 2023 — {t('footer:rights')}</Copyright>
        </FooterInner>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
