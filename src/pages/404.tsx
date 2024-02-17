import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { NotFound } from "entities/NotFound/NotFound"
import { SEO } from "components/Seo/Seo"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFound />
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO title="Not found" />
)
