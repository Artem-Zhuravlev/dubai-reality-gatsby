import React, { memo } from 'react';
import './ArticlesPreviewSection.scss';
import { Link } from 'gatsby';
import { HiddenInfoCard } from 'components/cards';
import { IGatsbyImageData } from 'gatsby-plugin-image';


interface ArticlesData {
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    date?: string;
    banner?: IGatsbyImageData
  }
}

interface ArticlesPreviewSectionProps {
  className?: string;
  withDarkCards?: boolean;
  linkName?: string;
  items: ArticlesData[];
  category?: string;
}

export const ArticlesPreviewSection = memo((props: ArticlesPreviewSectionProps) => {
  const {
    className,
    withDarkCards = true,
    linkName = 'See project',
    items,
    category
  } = props;

  console.log(items);

  return (
    <section className="articles-preview section">
      <div className="container">
        <header className="articles-preview__header">
          <h2 className="h1 articles-preview__title">
            Useful articles
          </h2>
          <Link
            to="/route"
            className="articles-preview__show-more"
          >
            View all articles
          </Link>
        </header>
        <div className="articles-preview__row">
          {
            items && items.map((item, index) => (
              <HiddenInfoCard
                key={`${item.frontmatter.slug}_${index}`}
                to={`${category}/${item.frontmatter.slug}`}
                title={item.frontmatter.title}
                description={item.frontmatter.description}
                linkName={linkName}
                small
                date={item.frontmatter.date}
                dark={withDarkCards}
                imageUrl={item.frontmatter.banner}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
});