import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          companyName
          phone
          address
          email
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}