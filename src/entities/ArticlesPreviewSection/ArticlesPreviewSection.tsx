import React, { memo } from 'react';
import './ArticlesPreviewSection.scss';
import { Link } from 'gatsby';
import { HiddenInfoCard } from '../../components/HiddenInfoCard/HiddenInfoCard';

interface ArticlesData {
  slug: string;
  title: string;
  description: string;
  date?: string;
}

interface ArticlesPreviewSectionProps {
  className?: string;
  withDarkCards?: boolean;
  linkName?: string;
}

export const ArticlesPreviewSection = memo((props: ArticlesPreviewSectionProps) => {
  const {
    className,
    withDarkCards = true,
    linkName = 'See project'
  } = props;

  const items: ArticlesData[] = [
    {
      slug: 'slug-1',
      title: 'Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
      date: '2024-06-10'
    },
    {
      slug: 'slug-2',
      title: 'Dubai 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
      date: '2024-06-12'
    },
    {
      slug: 'slug-3',
      title: 'Dubai 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
      date: '2024-06-13'
    }
  ]

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
                key={`${item.slug}_${index}`}
                to={item.slug}
                title={item.title}
                description={item.description}
                linkName={linkName}
                small
                date={item.date}
                dark={withDarkCards}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
});