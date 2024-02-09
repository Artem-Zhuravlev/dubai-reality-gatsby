import React, { memo } from 'react';
import { BlogCard, BlogCardProps } from '../../components/BlogCard/BlogCard';
import './ArticlesSection.scss';

interface ArticlesSectionProps {
  items?: (Pick<BlogCardProps, Exclude<keyof BlogCardProps, 'to'>> & { slug: string })[];
}

export const ArticlesSection = memo((props: ArticlesSectionProps) => {
  const {
    items
  } = props;

  return (
    <section className="articles-section container-fluid">
      <header
        className="articles-section__header"
      >
        <h1 className="articles-section__title">Blog</h1>
      </header>
      <div
        className="articles-section__content"
      >
        {
          items ? items.map((item, index) => (
            <BlogCard
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