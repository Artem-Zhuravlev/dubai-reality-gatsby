import React, { memo, useId } from 'react';
import Slider from 'react-slick';
import { FeedbackCard } from 'components/cards';
import { settings } from './settings';
import { items } from './data';
import './FeedbackSection.scss';


interface FeedbackSectionProps {
  className?: string;
}

export const FeedbackSection = memo((props: FeedbackSectionProps) => {
  const { className } = props;
  const id = useId();

  return (
    <div className="feedback-section section">
      <Slider
        {...settings}
      >
        {
          items && items.map((item, index) => (
            <FeedbackCard
              key={`${id}_${index}`}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))
        }
        
      </Slider>
    </div>
  );
});