import React, { memo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import {
  BannerNav,
  BannerSlide,
  BannerPagination
} from './common';
import './Banner.scss';

export interface IBannerSliderItems {
  slug: string;
  category: string;
  title: string;
}

export const Banner = memo(() => {
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const bannerSliderItems: IBannerSliderItems[] = [
    {
      slug: 'book-consultation',
      category: 'Lorem ipsum',
      title: 'Welcome Home <mark>TO</mark> Luxury'
    },
    {
      slug: 'book-consultation',
      category: 'Lorem ipsum 1',
      title: 'Welcome Home <mark>TO</mark> Luxury 123'
    },
    {
      slug: 'book-consultation',
      category: 'Lorem ipsum 2',
      title: 'Welcome Home <mark>TO</mark> Luxury 234'
    }
  ]

  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    speed: 200,
    fade: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="banner container-fluid">
      <Slider
        ref={sliderRef}
        {...settings}
      >
        { bannerSliderItems && bannerSliderItems.map((slide, index) => (
          <BannerSlide
            image="slider1.jpg"
            title={slide.title}
            category={slide.category}
            to={slide.slug}
            slide={index}
            activeSlide={slideIndex}
            key={`${slide.slug}_${index}`}
          />
        )) }
      </Slider>
      <div className="banner__controls">
        <BannerNav
          handlePrev={handlePrev}
          handleNext={handleNext}
          slideIndex={slideIndex}
          lastSlideIndex={2}
        />
        <BannerPagination
          slideIndex={slideIndex}
          items={bannerSliderItems}
        />
      </div>
    </div>
  );
});