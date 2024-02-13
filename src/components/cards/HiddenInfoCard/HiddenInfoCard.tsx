import { Link } from 'gatsby';
import React, { memo } from 'react';
import './HiddenInfoCard.scss';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

interface HiddenInfoCardProps {
  to: string;
  title: string;
  linkName: string;
  description?: string;
  small?: boolean;
  date?: string;
  dark?: boolean;
}

export const HiddenInfoCard = memo((props: HiddenInfoCardProps) => {
  const {
    to,
    title,
    description,
    linkName,
    small,
    date,
    dark
  } = props;

  const cardClass = classNames(
    'hidden-info-card',
    {
      'hidden-info-card--small': small,
      'hidden-info-card--dark': dark,
    }
  );

  return (
    <Link
      className={cardClass}
      to={`/${to}`}
    >
      <div className="hidden-info-card__img">
        <StaticImage
          src="../../../static/card-img.jpg"
          alt="some alt"
        />  
      </div>
      <div className="hidden-info-card__description">
        {
          date && (
            <time
              className='hidden-info-card__date'
            >
              {date}
            </time>
          )
        }
        
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