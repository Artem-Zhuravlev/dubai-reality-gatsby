import React, { memo } from 'react';
import './ArticlesBanner.scss';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ArticlesBannerProps {
  title: string;
  category?: string;
  imageUrl: IGatsbyImageData;
}

export const ArticlesBanner = memo((props: ArticlesBannerProps) => {
  const { title, category, imageUrl } = props;
  const image: any = getImage(imageUrl);

  return (
    <section className="articles-banner container-fluid">
      <div className="articles-banner__img">
        <GatsbyImage image={image} alt={title}/>
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