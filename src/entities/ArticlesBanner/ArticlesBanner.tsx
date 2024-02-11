import React, { memo } from 'react';
import './ArticlesBanner.scss';
import { StaticImage } from 'gatsby-plugin-image';

interface ArticlesBannerProps {
  className?: string
}

export const ArticlesBanner = memo((props: ArticlesBannerProps) => {
  const { className } = props;

  return (
    <section className="articles-banner container-fluid">
      <div className="articles-banner__img">
        <StaticImage
          src="../../static/articles-banner.jpg"
          alt="some title"
        />
      </div>

      <div className="articles-banner__description">
        <strong className="articles-banner__category">Rent</strong>
        <h1 className="articles-banner__title">Furnished Apartments in Dubai</h1>
      </div>
    </section>
  );
});