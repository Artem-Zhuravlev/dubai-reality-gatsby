import React, { memo } from 'react';
import './BannerSlide.scss';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface BannerSlideProps {
  category: string;
  image: string;
  to: string;
  title: string;
  slide: number;
  activeSlide: number;
}

export const BannerSlide = memo((props: BannerSlideProps) => {
  const {
    category,
    image,
    to,
    title,
    slide,
    activeSlide
  } = props;

  const bannerSLideClass = classNames(
    'banner-slide',
    { 'banner-slide--active': slide === activeSlide }
  )

  return (
    <div className={bannerSLideClass}>
      <StaticImage
        className="banner-slide__img"
        src="../../../../static/slider1.jpg"
        alt={title}
      />
      <div className="banner-slide__description container">
        <small className="banner-slide__category">{category}</small>
        <h3
          className="banner-slide__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Link
          to={`/${to}`}
          className="banner-slide__link"
        >See more</Link>
      </div>
    </div>
  );
});