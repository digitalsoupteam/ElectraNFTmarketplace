import { useState, useRef, useEffect, useTransition } from 'react';
import {
  StyledDropdown,
  Descriptor,
  DropdownToggler,
  DropwonListWrapper as DropdownListWrapper,
  DropdownList,
  DropdownItem,
} from './styled';
import { t } from 'i18next';

interface IDropdownItem {
  name: string;
  onClick: () => void;
}

interface IDropdown {
  toggler?: React.ReactNode;
  $isExchange?: boolean;
  items: IDropdownItem[];
  isValid: boolean;
  className?: string;
}

const Dropdown: React.FC<IDropdown> = ({
  toggler,
  items,
  isValid,
  className,
  $isExchange,
}) => {
  useTransition();
  const [isOpened, setIsOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const [currentText, setCurrentText] = useState(toggler ?? items[0].name);
  const openContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openContent.current) {
      setHeight(isOpened ? openContent.current.offsetHeight : 0);
    }
  }, [isOpened, height]);

  return (
    <StyledDropdown className={className} $isExchange={$isExchange}>
      {$isExchange ? <Descriptor>{t('main:from')}</Descriptor> : null}
      <DropdownToggler
        $isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
        isValid={isValid}
        $isExchange={$isExchange}
      >
        {currentText}
      </DropdownToggler>

      <DropdownListWrapper $height={height}>
        <DropdownList ref={openContent}>
          {items?.map((item) => (
            <DropdownItem
              $isExchange={$isExchange}
              onClick={() => {
                setIsOpened(false);
                setCurrentText(item.name);
                item.onClick();
              }}
              key={item.name}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownListWrapper>
    </StyledDropdown>
  );
};

export default Dropdown;
