import React, { memo, useId } from 'react';
import './CarouselSection.scss';
import Slider from 'react-slick';
import { settings } from './sliderSettings';
import { HiddenInfoCard } from 'components/cards';
import { graphql, useStaticQuery } from 'gatsby';
import { ICard } from 'interfaces/ICard';

export const CarouselSection = memo(() => {
  const id = useId();

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 8
        filter: {
          frontmatter: {
            category: {
              nin: ["", "feedbacks", null]
            }
          }
        }
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
                  height: 580
                  width: 450
                  placeholder: BLURRED
                  formats: [AUTO]
                  breakpoints: [750, 1080, 1366, 1920]
                )
              }
            }
          }
        }
      }
    }
  `)

  const items: ICard[] = data.allMarkdownRemark.nodes;

  return (
    <section className="carousel-section container-fluid section">
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
              to={`${item.frontmatter.category}/${item.frontmatter.slug}`}
              title={item.frontmatter.title}
              description={item.frontmatter.description}
              linkName="See project"
              imageUrl={item.frontmatter.banner}
            />
          ))
        }
      </Slider>
    </section>
  );
});