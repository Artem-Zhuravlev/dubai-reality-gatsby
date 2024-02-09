import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { BlogCard } from "../components/BlogCard/BlogCard";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div className="container">
        <BlogCard
          to="slug"
          category="Townhous"
          title="Arabian Ranches"
          description="The launch of this community enabled expats to own a luxurious property in Dubai. "
        />
      </div>
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
