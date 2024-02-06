import { Link } from 'gatsby';
import React, { memo } from 'react';
import './HiddenInfoCard.scss';
import { StaticImage } from 'gatsby-plugin-image';

interface HiddenInfoCardProps {
  to: string;
  title: string;
  linkName: string;
  description?: string;
}

export const HiddenInfoCard = memo((props: HiddenInfoCardProps) => {
  const {
    to,
    title,
    description,
    linkName
  } = props;

  return (
    <Link
      className="hidden-info-card"
      to={`/${to}`}
    >
      <div className="hidden-info-card__img">
        <StaticImage
          src="../../static/card-img.jpg"
          alt="some alt"
        />  
      </div>
      <div className="hidden-info-card__description">
        <h3 className="hidden-info-card__title">
          {title}
        </h3>
        {description && (
          <p>{description}</p>
        )}
        <span
          className="hidden-info-card__link"
          
        >{linkName}</span>            
      </div>
    </Link>
  );
});