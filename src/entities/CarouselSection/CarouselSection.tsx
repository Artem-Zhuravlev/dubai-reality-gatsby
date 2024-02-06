import React, { memo, useId } from 'react';
import './CarouselSection.scss';
import Slider from 'react-slick';
import { settings } from './sliderSettings';
import { HiddenInfoCard } from '../../components/HiddenInfoCard/HiddenInfoCard';


interface CardItems {
  slug: string;
  title: string;
  description: string;
}

export const CarouselSection = memo(() => {
  const id = useId();


  const items: CardItems[] = [
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    },
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    },
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    },
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    },
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    },
    {
      slug: 'dubai',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie'
    }
  ]

  return (
    <section className="carousel-section container-fluid">
      <div className="container">
        <h2
          className="h2 carousel-section__title"
        >
          Latest projects
        </h2>
      </div>
      <Slider
        {...settings}
      >
        {
          items && items.map((item, index) => (
            <HiddenInfoCard
              key={`${id}_${index}`}
              to="route"
              title="Dubai"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit."
              linkName="See project"
            />
          ))
        }
      </Slider>
    </section>
  );
});