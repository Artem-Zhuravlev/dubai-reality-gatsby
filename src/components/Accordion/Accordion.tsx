import React, { memo, useId } from 'react';
import './Accordion.scss';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

interface AccordionProps {
  items: AccordionItemProps[];
}

export const Accordion = memo((props: AccordionProps) => {
  const { items } = props;
  const id = useId();

  return (
    <div className="accordion">
      {
        items && items.map((item, index) => (
          <AccordionItem
            key={`${id}_${index}`}
            title={item.title}
            content={item.content}
          />
        ))
      }
    </div>
  );
});