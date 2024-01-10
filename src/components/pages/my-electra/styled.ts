import styled from 'styled-components';
import Communication from '../../blocks/communication/communication';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';
import P from '../../../elements/p';

const MyElectraTitle = styled(Title)`
  color: ${(props) => props.theme.blackPrimary};
  text-align: end;
  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    text-align: start;
    margin-bottom: 0;
  }
`;

const TitleLogo = styled(Image)`
  margin-left: 10px;
  width: 191px;
  height: 54px;
  position: relative;
  top: 7px;
`;

const TotalEarnings = styled(P)`
  color: ${(props) => props.theme.grey};
  background-color: ${(props) => props.theme.lightGrey};
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 23px;
  margin-left: auto;
`;

const TotalEarningsAmount = styled.span`
  color: ${(props) => props.theme.diamond};
`;

const StyledMyElectra = styled.div`
  padding: 143px 0 55px;
  background-color: ${(props) => props.theme.white};
`;

const StyledCommunication = styled(Communication)`
  background-color: ${(props) => props.theme.white};
`;

const NoNfts = styled.div`
  padding: 55px 0 55px;
  display: flex;
  align-items: center;
`;

const NoNftsText = styled.div`
  color: ${(props) => props.theme.blackPrimary};
  font-size: 26px;
  width: fit-content;
  margin-right: 15px;
`;

// const MultiClaim = styled.div`
//   display: flex;
//   gap: 27px;
// `;

// const MultiClaimInner = styled.div`
//   flex-grow: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: ${(props) => props.theme.lightGrey};
//   border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};
//   padding: 12px 20px;
// `;

// const MultiClaimText = styled(P)`
//   color: ${(props) => props.theme.grey};
//   font-size: 24px;
//   font-weight: 600;
//   line-height: 130%;
// `;

// const MultiClaimAmount = styled(P)`
//   color: ${(props) => props.theme.diamond};
//   font-size: 24px;
//   font-weight: 600;
//   line-height: 130%;
// `;

export {
  StyledMyElectra,
  MyElectraTitle,
  TitleLogo,
  TotalEarnings,
  TotalEarningsAmount,
  StyledCommunication,
  NoNfts,
  NoNftsText,
  // MultiClaim,
  // MultiClaimInner,
  // MultiClaimText,
  // MultiClaimAmount,
};
