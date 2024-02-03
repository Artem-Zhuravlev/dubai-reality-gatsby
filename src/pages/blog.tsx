import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { Button } from "../components/Button/Button";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <div>
      Blog
    </div>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Home Page</title>
