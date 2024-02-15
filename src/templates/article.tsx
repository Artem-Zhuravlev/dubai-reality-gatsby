import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "layouts/MainLayout/MainLayout";
import {
  ArticlesBanner,
  ArticlesPreviewSection
} from "entities/Articles";
import { Content } from "components/Content/Content";
import { ContactUsSection } from "entities/Contact/ContactUsSection/ContactUsSection";
import { BreadcrumbsSection } from "entities/BreadcrumbsSection/BreadcrumbsSection";
import { graphql } from "gatsby";
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

const BlogPage: React.FC<PageProps<MarkdownRemarkData>> = ({ data }) => {
  const {
    title,
    slug,
    category,
    categoryTitle,
    banner
  } = data.markdownRemark.frontmatter;
  const { html } = data?.markdownRemark;
  const items = data.allMarkdownRemark.nodes;

  return (
    <MainLayout>
      <ArticlesBanner
        imageUrl={banner}
        title={title}
      />
      <BreadcrumbsSection
        slug={slug}
        category={category}
        title={title}
        categoryTitle={categoryTitle}
      />
      <Content
        content={html}
      />
      <ContactUsSection />
      <ArticlesPreviewSection
        items={items}
        category={category}
      />
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Article</title>

export const query = graphql`
  query PostQuery($slug: String, $category: String) {
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
              formats: [AUTO]
            )
          }
        }
      }
    },
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          category
          slug
          title
          description
          banner {
            childImageSharp {
              gatsbyImageData(
                width: 350
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
`
