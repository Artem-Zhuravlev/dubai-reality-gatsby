import React, { memo, useId } from 'react';
import Slider from 'react-slick';
import { FeedbackCard } from 'components/cards';
import { settings } from './settings';
import './FeedbackSection.scss';
import { useStaticQuery, graphql } from 'gatsby';

interface IFeedbackItems {
  title: string;
  subtitle: string;
  description: string;
}

export const FeedbackSection = memo(() => {
  const id = useId();

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "feedbacks"}}}) {
        nodes {
          frontmatter {
            category
            items {
              title
              subtitle
              description
            }
          }
        }
      }
    }
  `);

  const items: IFeedbackItems[] = data.allMarkdownRemark.nodes[0].frontmatter.items;

  return (
    <div className="feedback-section section">
      <Slider
        {...settings}
      >
        {
          items && items.map((item, index) => (
            <FeedbackCard
              key={`${id}_${index}`}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))
        }
        
      </Slider>
    </div>
  );
});