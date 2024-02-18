import React, { memo, useId } from 'react';
import './ContentSection.scss';
import { Blockquote } from 'components/Blockquote/Blockquote';
import { ImageTextCol } from 'components/lists';
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from 'gatsby-plugin-image';

export const ContentSection = memo((props) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {name: {eq: "content"}}) {
        frontmatter {
          author
          blockquote
          items {
            text
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 300
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
  `);

  const {
    author,
    blockquote,
    items
  } = data.markdownRemark.frontmatter;

  const id = useId();

  return (
    <section className='content-section section'>
      <div className="container">
        <Blockquote
          className='content-section__blockquote'
          cite={blockquote}
          author={author}
        />
        <div className="content-section__row">
          {
            items && items.map((item: { text: string; image: IGatsbyImageData; }, index: number) => (
              <ImageTextCol
                key={`${id}_${index}`}
                text={item.text}
                imageUrl={item.image}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
});