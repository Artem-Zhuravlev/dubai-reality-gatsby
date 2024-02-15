import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'styles/main.scss';
import { graphql } from "gatsby";
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ArticlesBanner } from '../entities/Articles';
import { CategoriesSection } from '../entities/CategoriesSection/CategoriesSection';
import { ContactUsSection } from '../entities/Contact';
import { Content } from '../components/Content/Content';
import { IGatsbyImageData } from "gatsby-plugin-image";


interface MarkdownRemarkData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      slug: string;
      category: string;
      categoryTitle: string;
      banner: IGatsbyImageData;
    };
  };
  allMarkdownRemark: {
    nodes: Array<any>
  }
}


const ContactPage: FC<PageProps<MarkdownRemarkData>> = ({ data }) => {
  const {
    title,
    slug,
    category,
    categoryTitle,
    banner
  } = data.markdownRemark.frontmatter;
  const { html } = data?.markdownRemark;
  const items = data.allMarkdownRemark.nodes;

  console.log(items);

  return (
    <MainLayout>
      <ArticlesBanner
        title={title}
        imageUrl={banner}
      />
      <CategoriesSection
        title="Best Offers"
        items={items}
      />
      <ContactUsSection />
      <Content content={html} />
    </MainLayout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contacts</title>

export const query = graphql`
  query PostQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html 
      frontmatter {
        title
        slug 
        category
        categoryTitle
        banner {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [WEBP]
            )
          }
        }
      }
    },
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $slug } } }
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
                formats: [WEBP]
              )
            }
          }
        }
      }
    }
  }
`