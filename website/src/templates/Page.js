import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Theme } from "../components/Theme"
import { Container } from "../components/Container"
import { Navbar } from "../components/Navbar"

export default ({ data: { mdx } }) => {
  return (
    <Theme>
      <Container>
        <Helmet title={mdx.frontmatter.title} />
        <Navbar />

        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
    </Theme>
  )
}

export const query = graphql`
  query BlogPostQuery($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`
