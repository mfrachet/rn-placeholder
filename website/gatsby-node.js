const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/Page.js`)

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  const pages = result.data.allMdx.edges

  pages.forEach(({ node }) => {
    createPage({
      id: node.id,
      path: node.frontmatter.path,
      component: pageTemplate,
      context: { id: node.id },
    })
  })
}
