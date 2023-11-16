import { useState, useRef, useEffect } from 'react';
import React from 'react';
import {
  StyledAccordion,
  AccordionButton,
  AccordionContentWrapper,
  AccordionContent,
} from './styled';

interface IAccordionItem {
  title: string;
  content: React.ReactNode;
}

interface IAccordion {
  accordionItems: IAccordionItem[];
  className?: string;
}

const Accordion: React.FC<IAccordion> = ({ accordionItems, className }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [height, setHeight] = useState(0);
  const openContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openContent.current) {
      setHeight(openContent.current.offsetHeight || 0);
    }
  }, [activeItemIndex, height]);

  return (
    <StyledAccordion className={className}>
      {accordionItems &&
        accordionItems.length &&
        accordionItems.map((item, index) => (
          <div key={index}>
            <AccordionButton
              $isOpened={index === activeItemIndex}
              onClick={() =>
                activeItemIndex === index
                  ? setActiveItemIndex(null)
                  : setActiveItemIndex(index)
              }
            >
              {item.title}
            </AccordionButton>
            <AccordionContentWrapper
              $height={index === activeItemIndex ? height : 0}
            >
              <AccordionContent
                ref={index === activeItemIndex ? openContent : null}
              >
                {item.content}
              </AccordionContent>
            </AccordionContentWrapper>
          </div>
        ))}
    </StyledAccordion>
  );
};

export default Accordion;
