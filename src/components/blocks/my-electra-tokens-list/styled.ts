import styled, { css } from 'styled-components';
import Tick from '../../../assets/tick.svg';

const StyledMyElectraTokensList = styled.div`
  padding: 0 0 109px;
  max-width: 100vw;
  overflow-x: auto;
`;

const TokensList = styled.table`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  border-collapse: collapse;

  tbody tr:nth-child(2n) {
    background-color: ${(props) => props.theme.lightGrey};
  }
`;

const TokenListHeader = styled.thead`
  border-radius: 8px 8px 0 0;
  background-color: ${(props) => props.theme.diamond};
  color: ${(props) => props.theme.white};
`;

const TokenListHeaderItem = styled.th`
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  padding: 12px 23px 11px;

  &:first-child {
    border-radius: 8px 0 0 0;
    padding-left: 34px;
  }

  &:last-child {
    border-radius: 0 8px 0 0;
    text-align: start;
  }
`;

interface IHeaderCheckbox {
  checked: boolean;
}

const HeaderCheckbox = styled.label<IHeaderCheckbox>`
  cursor: pointer;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.white};
    border: 1px solid #bdbdbd;
    transition: all 0.2s;

    ${(props) =>
      props.checked
        ? css`
            border: 1px solid ${(props) => props.theme.diamond};
            background-image: url(${Tick});
            background-position: center;
            background-repeat: no-repeat;
            background-color: ${(props) => props.theme.diamond};
          `
        : null}
  }

  input {
    display: none;
  }
`;

export {
  StyledMyElectraTokensList,
  TokensList,
  TokenListHeader,
  TokenListHeaderItem,
  HeaderCheckbox,
};
