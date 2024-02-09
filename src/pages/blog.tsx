import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { ArticlesSection } from "../entities/ArticlesSection/ArticlesSection";

const BlogPage: React.FC<PageProps> = () => {
  const handleSearch = (value: string) => {
    console.log(value, 'from upper scope')
  }

  return (
    <MainLayout>
      <ArticlesSection
        onSearch={handleSearch}
      />
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
