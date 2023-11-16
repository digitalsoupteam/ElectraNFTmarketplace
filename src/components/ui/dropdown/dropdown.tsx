import { useState, useRef, useEffect } from 'react';
import {
  StyledDropdown,
  DropdownToggler,
  DropwonListWrapper,
  DropdownList,
  DropdownItem,
} from './styled';

interface IDropdownItem {
  type: string;
  onClick: () => void;
}

interface IDropdown {
  toggler: React.ReactNode;
  items: IDropdownItem[];
  className?: string;
}

const Dropdown: React.FC<IDropdown> = ({ toggler, items, className }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const [currentText, setCurrentText] = useState(toggler);
  const openContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openContent.current) {
      setHeight(isOpened ? openContent.current.offsetHeight : 0);
    }
  }, [isOpened, height]);

  return (
    <StyledDropdown className={className}>
      <DropdownToggler
        $isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      >
        {currentText}
      </DropdownToggler>
      <DropwonListWrapper $height={height}>
        <DropdownList ref={openContent}>
          {items &&
            items.length &&
            items.map((item, index) => (
              <DropdownItem
                onClick={() => {
                  setIsOpened(false);
                  setCurrentText(item.type);
                  item.onClick();
                }}
                key={index}
              >
                {item.type}
              </DropdownItem>
            ))}
        </DropdownList>
      </DropwonListWrapper>
    </StyledDropdown>
  );
};

export default Dropdown;
