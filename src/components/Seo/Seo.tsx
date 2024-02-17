import React, { ReactNode } from "react"
import { useSiteMetadata } from "hooks/useSiteMetadata"
import favicon from 'static/favicon.ico'

interface SeoProps {
  title?: string;
  description?: string;
  children?: ReactNode
}

export const SEO = ({
  title,
  description,
  children
}: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    companyName
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription
  }

  return (
    <>
      <title>{companyName} - {seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href={favicon} />
      {children}
    </>
  )
}