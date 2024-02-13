import React, { memo, useId, useState } from 'react';
import { BlogCard, BlogCardProps } from 'components/cards';
// import './ArticlesSection.scss';
import { Pagination } from 'components/Pagination/Pagination';

interface ArticleItem extends Omit<BlogCardProps, 'to'> {
  slug: string;
}

interface CategoriesSectionProps {
  title: string;
}

export const CategoriesSection = memo((props: CategoriesSectionProps) => {
  const { title } = props;
  const id = useId();
  const [pageCount, setPageCount] = useState(0);

  const items:ArticleItem[] = [
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    }
  ]

  return (
    <section className="articles-section container-fluid section">
      <header
        className="articles-section__header"
        style={{ textAlign: 'center', gridTemplateColumns: '1fr' }}
      >
        <h1 className="articles-section__title">{title}</h1>
      </header>
      <div
        className="articles-section__content"
      >
        {
          items ? items.map((item, index) => (
            <BlogCard
              key={`${id}_${index}`}
              title={item.title}
              to={item.slug}
              category={item.category}
              description={item.description}
            />
          )) : (
            <p>Articles not found</p>
          )
        }
      </div>
      <footer className="articles-section__footer">
        <Pagination
          pageCount={items.length}
        />
      </footer>
    </section>
  );
});