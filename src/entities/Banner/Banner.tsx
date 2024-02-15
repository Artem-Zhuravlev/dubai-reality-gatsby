import React, { memo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import {
  BannerNav,
  BannerSlide,
  BannerPagination
} from './common';
import './Banner.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { ICard } from 'interfaces/ICard';

export const Banner = memo(() => {
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);


  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        filter: { frontmatter: { category: { in: "buy" } } }
      ) {
        nodes {
          frontmatter {
            category
            categoryTitle
            slug
            title
            description
            banner {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  placeholder: BLURRED
                  formats: [AUTO]
                )
              }
            }
          }
        }
      }
    }
  `)

  const items: ICard[] = data.allMarkdownRemark.nodes;

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
        { items && items.map((slide, index) => (
          <BannerSlide
            imageUrl={slide.frontmatter.banner}
            title={slide.frontmatter.title}
            category={slide.frontmatter.category}
            categoryTitle={slide.frontmatter.categoryTitle}
            to={slide.frontmatter.slug}
            slide={index}
            activeSlide={slideIndex}
            key={`${slide.frontmatter.slug}_${index}`}
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
          items={items}
        />
      </div>
    </div>
  );
});

