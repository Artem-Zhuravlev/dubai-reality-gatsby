import React, { memo, useId } from 'react';
import { BlogCard, BlogCardProps } from '../../components/BlogCard/BlogCard';
import './ArticlesSection.scss';
import { InputSearch } from '../../components/InputSearch/InputSearch';

export interface ArticleItem extends Omit<BlogCardProps, 'to'> {
  slug: string;
}
interface ArticlesSectionProps {
  items?: ArticleItem[];
  onSearch: (value: string) => void;
}

export const ArticlesSection = memo((props: ArticlesSectionProps) => {
  const {
    items,
    onSearch
  } = props;
  const id = useId();

  const handleSearch = (value: string) => {
    onSearch(value);
  }

  return (
    <section className="articles-section container-fluid">
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
    </section>
  );
});