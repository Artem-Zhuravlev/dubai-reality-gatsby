import React, { memo, useId, useState } from 'react';
import { BlogCard, BlogCardProps } from 'components/cards';
import './ArticlesSection.scss';
import { InputSearch } from 'components/form';
import { Pagination } from 'components/Pagination/Pagination';
import { graphql, useStaticQuery } from "gatsby";
import { ICard } from 'interfaces/ICard';

export const ArticlesSection = memo(() => {
  const id = useId();
  const [pageCount, setPageCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState<ICard[] | null>(null);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { in: "blog" } } }
      ) {
        nodes {
          frontmatter {
            category
            categoryTitle
            slug
            title
            description
            banner {
              childImageSharp {
                gatsbyImageData(
                  width: 380
                  height: 350
                  placeholder: BLURRED
                  formats: [AUTO]
                )
              }
            }
          }
        }
      }
    }
  `);

  const items: ICard[] = data.allMarkdownRemark.nodes;

  const handleSearch = (value: string) => {
    const filteredItems = items.filter((node: { frontmatter: { title: string; }; }) => {
      return node.frontmatter.title.toLowerCase().includes(value.toLowerCase())
    })

    setFilteredItems(filteredItems)
  }

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
          (filteredItems && filteredItems.length) ? filteredItems.map((item, index) => (
            <BlogCard
              key={`${id}_${index}`}
              title={item.frontmatter.title}
              to={`${item.frontmatter.category}/${item.frontmatter.slug}`}
              category={item.frontmatter.categoryTitle}
              imageUrl={item.frontmatter.banner}
              description={item.frontmatter.description}
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