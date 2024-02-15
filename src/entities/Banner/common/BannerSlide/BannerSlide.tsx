import React, { memo } from 'react';
import './BannerSlide.scss';
import classNames from 'classnames';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface BannerSlideProps {
  category?: string;
  categoryTitle?: string;
  imageUrl?: IGatsbyImageData;
  to: string;
  title: string;
  slide: number;
  activeSlide: number;
}

export const BannerSlide = memo((props: BannerSlideProps) => {
  const {
    category,
    imageUrl,
    to,
    title,
    slide,
    categoryTitle,
    activeSlide
  } = props;

  const bannerSLideClass = classNames(
    'banner-slide',
    { 'banner-slide--active': slide === activeSlide }
  )

  let image: any;

  if (imageUrl) {
    image = getImage(imageUrl);
  }

  return (
    <div className={bannerSLideClass}>
      {
        imageUrl && (
          <GatsbyImage
            className="banner-slide__img"
            image={image}
            alt={title}
          />
        )
      }
      
      <div className="banner-slide__description container">
        {categoryTitle && <small className="banner-slide__category">{categoryTitle}</small>}
        <h3
          className="banner-slide__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Link
          to={`/${category}/${to}`}
          className="banner-slide__link"
        >See more</Link>
      </div>
    </div>
  );
});