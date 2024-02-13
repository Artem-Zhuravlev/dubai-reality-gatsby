import React, { memo } from 'react';
import './ArticlesBanner.scss';
import { StaticImage } from 'gatsby-plugin-image';

interface ArticlesBannerProps {
  title: string;
  category?: string;
}

export const ArticlesBanner = memo((props: ArticlesBannerProps) => {
  const { title, category } = props;

  return (
    <section className="articles-banner container-fluid">
      <div className="articles-banner__img">
        <StaticImage
          src="../../../static/articles-banner.jpg"
          alt="some title"
        />
      </div>

      <div className="articles-banner__description">
        {
          category && <strong className="articles-banner__category">{category}</strong>
        }
        
        <h1 className="articles-banner__title">{title}</h1>
      </div>
    </section>
  );
});