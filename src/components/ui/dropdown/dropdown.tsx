import { useState, useRef, useEffect } from 'react';
import {
  StyledDropdown,
  Descriptor,
  DropdownToggler,
  DropwonListWrapper,
  DropdownList,
  DropdownItem,
} from './styled';

interface IDropdownItem {
  name: string;
  onClick: () => void;
}

interface IDropdown {
  toggler?: React.ReactNode;
  isExchange?: boolean;
  items: IDropdownItem[];
  isValid: boolean;
  className?: string;
}

const Dropdown: React.FC<IDropdown> = ({
  toggler,
  items,
  isValid,
  className,
  isExchange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const [currentText, setCurrentText] = useState(
    toggler ? toggler : items[0].name
  );
  const openContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openContent.current) {
      setHeight(isOpened ? openContent.current.offsetHeight : 0);
    }
  }, [isOpened, height]);

  return (
    <StyledDropdown className={className} isExchange={isExchange}>
      {isExchange ? <Descriptor>From</Descriptor> : null}
      <DropdownToggler
        $isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
        isValid={isValid}
        isExchange={isExchange}
      >
        {currentText}
      </DropdownToggler>
      <DropwonListWrapper $height={height}>
        <DropdownList ref={openContent}>
          {items &&
            items.length &&
            items.map((item, index) => (
              <DropdownItem
                isExchange={isExchange}
                onClick={() => {
                  setIsOpened(false);
                  setCurrentText(item.name);
                  item.onClick();
                }}
                key={index}
              >
                {item.name}
              </DropdownItem>
            ))}
        </DropdownList>
      </DropwonListWrapper>
    </StyledDropdown>
  );
};

export default Dropdown;
