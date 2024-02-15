import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    companyName: 'Dubai, UAE',
    phone: '+99 (0) 344 956 4050',
    address: '269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.',
    email: 'info@sparch.co'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        rootFolder: `src`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categories`,
        path: `${__dirname}/src/categories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

export default config
