import React, { memo, useId, useState } from 'react';
import { BlogCard, BlogCardProps } from 'components/BlogCard/BlogCard';
import './ArticlesSection.scss';
import { InputSearch } from 'components/Form';
import { Pagination } from 'components/Pagination/Pagination';

interface ArticleItem extends Omit<BlogCardProps, 'to'> {
  slug: string;
}

export const ArticlesSection = memo(() => {
  const id = useId();
  const [pageCount, setPageCount] = useState(0);

  const handleSearch = (value: string) => {
    console.log(value, 'from upper scope')
  }

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
      >
        <h1 className="articles-section__title">Blog</h1>
        <InputSearch
          onInput={handleSearch}
        />
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