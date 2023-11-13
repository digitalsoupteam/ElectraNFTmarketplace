import styled from 'styled-components';
import BottomCtaBgMobTop from '../../../assets/bottom-cta-bg--top-mob.png';
import BottomCtaBgMobBottom from '../../../assets/bottom-cta-bg--bottom-mob.png';
import BottomCtaBg from '../../../assets/bottom-cta-bg.png';
import { Title } from '../../ui/title/title';
import StarIco from '../../../assets/star-green.svg';
import Ul from '../../../elements/ul';

const StyledBottomCta = styled.section`
  padding: 80px 0 358px;
  background-color: ${(props) => props.theme.blackPrimary};
  background-image: url(${BottomCtaBgMobTop}), url(${BottomCtaBgMobBottom});
  background-repeat: no-repeat, no-repeat;
  background-position: top 126px center, bottom center;
  background-size: contain, contain;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 110px 0 495px;
    background-image: url(${BottomCtaBg});
    background-position: bottom center;
  }
`;

const BottomCtaTitle = styled(Title)`
  position: relative;
  margin-bottom: 34px;

  &:before {
    content: '';
    position: absolute;
    bottom: calc(100% + 11px);
    left: 15px;
    background-image: url(${StarIco});
    transform: rotate(-15deg);
    width: 30px;
    height: 33px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 72px;
  }
`;

interface ICtaItem {
  ico: string;
}

const CtaItem = styled.li<ICtaItem>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin: 0 8px;

  &:before {
    content: '';
    display: block;
    width: 40px;
    height: 44px;
    background-image: url(${(props) => props.ico});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 28px;
    margin: 0;
    justify-content: space-between;
  }
`;

const CtaList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 60px;

  ${CtaItem} {
    &:not(:last-child) {
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    align-items: stretch;
    gap: 81px;
    padding: 0;

    ${CtaItem} {
      &:not(:last-child) {
        padding: 0;
        border: none;
      }

      &:nth-child(2) {
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        padding: 0 81px;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
      }

      &:last-child {
        padding: 0;
        border: none;
      }
    }
  }
`;

const CtaItemTitle = styled(Title)`
  white-space: pre-wrap;
`;

export { StyledBottomCta, BottomCtaTitle, CtaList, CtaItem, CtaItemTitle };
