import React, { memo } from 'react';
import { Link } from 'gatsby';
import './BlogCard.scss';
import { StaticImage } from 'gatsby-plugin-image';

export interface BlogCardProps {
  to: string;
  description: string;
  title: string;
  category?: string;
}

export const BlogCard = memo((props: BlogCardProps) => {
  const {
    to,
    title,
    description,
    category
  } = props;

  return (
    <Link
      to={`/${to}`}
      className="blog-card"
    >
      <div className="blog-card__img">
        <StaticImage
          src="../../static/blog-img.jpg"
          alt={title}
        />
      </div>
      <div className="blog-card__description">
        {category && (
          <header
            className="blog-card__category"
          >
            {category}
          </header>
        )}
        
        <h4 className="blog-card__title">
          {title}
        </h4>
        <p>
          {description}
        </p>
        <b className="blog-card__link">Learn more</b>
      </div>
    </Link>
  );
});