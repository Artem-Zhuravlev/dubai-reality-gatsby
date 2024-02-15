import * as React from "react";
import 'styles/main.scss';
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { ArticlesSection } from "entities/Articles/ArticlesSection/ArticlesSection";

const BlogPage = () => {
  return (
    <MainLayout>
      <ArticlesSection />
    </MainLayout>
  );
}

export default BlogPage;

export const Head = () => <title>Blog</title>;
