import { StyledExchanger, ExchangeInner, ExchangeTitle } from './styled';
// import Dropdown from '../../ui/dropdown/dropdown';
// import Button from '../../ui/button/button';

// const items = [
//   {
//     type: 'ELCT',
//     onClick: () => {},
//   },
//   {
//     type: 'ETH',
//     onClick: () => {},
//   },
// ];

const Exchanger: React.FC = () => {
  return (
    <StyledExchanger>
      <ExchangeInner>
        {/* <ExchangeTitle>Exchange</ExchangeTitle> */}
        <ExchangeTitle>
          Soon..
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ExchangeTitle>
        {/* <Dropdown toggler={'Select'} items={items} isValid={true} />
        <Dropdown toggler={'Select'} items={items} isValid={true} />
        <Button isSmall={true}>Exchange</Button> */}
      </ExchangeInner>
    </StyledExchanger>
  );
};

export default Exchanger;
