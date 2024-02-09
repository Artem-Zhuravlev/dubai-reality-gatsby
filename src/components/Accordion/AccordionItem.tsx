import React, { memo, useState } from 'react';
import classNames from 'classnames';
import './Accordion.scss';
import { SlideToggle } from '../SlideToggle/SlideToggle';

export interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem = memo((props: AccordionItemProps) => {
  const { title, content } = props;
  const [isActive, setIsActive] = useState(false);
  const accordionItemClass = classNames(
    'accordion-item',
    { 'accordion-item--active' : isActive }
  )

  return (
    <div className={accordionItemClass}>
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="accordion-item__title"
      >
        {title}
      </button>

      <SlideToggle
        state={isActive}
        duration={0.5}
      ><div className="accordion-item__content">{content}</div>
      </SlideToggle>
    </div>
  );
});