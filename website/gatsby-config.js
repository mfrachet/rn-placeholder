/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/rn-placeholder",
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {},
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],

        gatsbyRemarkPlugins: ["gatsby-remark-autolink-headers"],
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
    `gatsby-plugin-react-native-web`,
  ],
}
