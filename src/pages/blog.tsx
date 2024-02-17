import * as React from "react";
import 'styles/main.scss';
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { ArticlesSection } from "entities/Articles/ArticlesSection/ArticlesSection";
import { HeadFC } from "gatsby";
import { SEO } from "components/Seo/Seo";

const BlogPage = () => {
  return (
    <MainLayout>
      <ArticlesSection />
    </MainLayout>
  );
}

export default BlogPage;

export const Head: HeadFC = () => (
  <SEO title="Blog" />
)
