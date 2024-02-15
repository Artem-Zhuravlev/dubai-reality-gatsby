import React, { memo } from 'react';
import './ArticlesPreviewSection.scss';
import { Link } from 'gatsby';
import { HiddenInfoCard } from 'components/cards';
import { ICard } from 'interfaces/ICard';

interface ArticlesPreviewSectionProps {
  darkMode?: boolean;
  linkName?: string;
  items: ICard[];
  category?: string;
}

export const ArticlesPreviewSection = memo((props: ArticlesPreviewSectionProps) => {
  const {
    darkMode = true,
    linkName = 'See project',
    items,
    category
  } = props;

  return (
    <section className="articles-preview section">
      <div className="container">
        <header className="articles-preview__header">
          <h2 className="h1 articles-preview__title">
            Useful articles
          </h2>
          <Link
            to={`/${category}`}
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
                dark={darkMode}
                imageUrl={item.frontmatter.banner}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
});