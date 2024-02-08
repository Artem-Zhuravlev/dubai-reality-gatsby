import React, { memo } from 'react';
import './FeedbackCard.scss';

interface FeedbackCardProps {
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
}

export const FeedbackCard = memo((props: FeedbackCardProps) => {
  const {
    className,
    title,
    subtitle,
    description
  } = props;

  return (
    <article className="feedback-card">
      <div className="feedback-card__user-icon">
        {title.slice(0, 2)}
      </div>
      <h3 className="feedback-card__title">{title}</h3>
      {
        subtitle && ( 
          <h4 className="feedback-card__subtitle">{subtitle}</h4>
        )
      }
      <p>{description}</p>
    </article>
  );
});