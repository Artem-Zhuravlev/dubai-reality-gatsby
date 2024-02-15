const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug,
            category
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    const { slug, category } = node.frontmatter;

    if (category) {
      actions.createPage({
        path: `/${category}/${slug}`,
        component: path.resolve('./src/templates/article.tsx'),
        context: { slug, category }
      })
    } else {
      actions.createPage({
        path: `/${slug}`,
        component: path.resolve('./src/templates/categories.tsx'),
        context: { slug, category }
      })
    }
  });
}