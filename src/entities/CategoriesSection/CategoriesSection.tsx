import React, { memo, useId } from 'react';
import { BlogCard, BlogCardProps } from 'components/cards';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Pagination } from 'components/Pagination/Pagination';

interface ArticleItem extends Omit<BlogCardProps, 'to'> {
  banner: IGatsbyImageData;
  slug: string;
  categoryTitle: string;
}

interface CategoriesSectionProps {
  title: string;
  items: Array<{ frontmatter: ArticleItem}>;
}

export const CategoriesSection = memo((props: CategoriesSectionProps) => {
  const {
    title,
    items
  } = props;
  const id = useId();

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
              title={item.frontmatter.title}
              to={`${item.frontmatter.category}/${item.frontmatter.slug}`}
              category={item.frontmatter.categoryTitle}
              description={item.frontmatter.description}
              imageUrl={item.frontmatter.banner}
            />
          )) : (
            <p>Articles not found</p>
          )
        }
      </div>
      {
        items.length > 6 && (
          <footer className="articles-section__footer">
            <Pagination
              pageCount={items.length}
            />
          </footer>
        )
      }
    </section>
  );
});