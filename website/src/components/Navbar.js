import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"
import GitHubButton from "react-github-btn"

const Nav = styled.nav`
  height: 64px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    height: auto;
    margin: -1rem;
  }
`

const Brand = styled(Link)`
  font-size: 1.5em;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 480px) {
    font-size: 1.2em;
    margin-bottom: 1rem;
  }
`

const MenuItem = styled.li`
  padding: 0 0.5rem;
`

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    background-color: #efefef;
    height: 50px;
    align-items: center;
    max-width: 100%;
    overflow: auto;
  }
`

const AllPosts = graphql`
  query {
    allMdx(sort: { order: ASC, fields: frontmatter___order }) {
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
`

export const Navbar = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(AllPosts)

  return (
    <Nav>
      <Brand to="/">
        rn-placeholder v3{" "}
        <GitHubButton
          href="https://github.com/mfrachet/rn-placeholder"
          data-show-count="true"
          aria-label="Star mfrachet/rn-placeholder on GitHub"
        >
          Star
        </GitHubButton>
      </Brand>

      <MenuList>
        {edges.map(({ node }) => (
          <MenuItem key={node.frontmatter.path}>
            <Link
              to={node.frontmatter.path}
              activeClassName="link-active"
              className="link"
            >
              {node.frontmatter.title}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Nav>
  )
}
