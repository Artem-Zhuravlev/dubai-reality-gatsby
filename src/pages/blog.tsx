import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { ArticlesSection, ArticleItem } from "../entities/ArticlesSection/ArticlesSection";

const BlogPage: React.FC<PageProps> = () => {
  const handleSearch = (value: string) => {
    console.log(value, 'from upper scope')
  }

  const data:ArticleItem[] = [
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    },
    {
      slug: 'some-slug',
      title: 'Commercial property in Abu Dhabi',
      description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'
    }
  ]

  return (
    <MainLayout>
      <ArticlesSection
        onSearch={handleSearch}
        items={data}
      />
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
