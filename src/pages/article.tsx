import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { ArticlesBanner } from "../entities/ArticlesBanner/ArticlesBanner";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <ArticlesBanner />
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Article</title>
