import { css } from "@emotion/core"

export const styles = theme =>
  css`
    a {
      text-decoration: none;
      color: black;
      border-left: 0.3em solid transparent;
      color: ${theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }

      &:active {
        color: ${theme.colors.darkPrimary};
      }
    }

    p,
    span {
      color: ${theme.colors.text};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    li,
    p {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      line-height: 1.7em;
    }

    p > code {
      background-color: ${theme.colors.textAccent};
      border-radius: 3px;
      padding: 0 0.4em;
    }

    .link.link-active {
      color: ${theme.colors.primary};
    }

    .link {
      color: ${theme.colors.text};

      &:hover {
        font-weight: normal;
        text-decoration: underline;
      }

      &:active {
        color: ${theme.colors.darkPrimary};
      }
    }
    .anchor {
      margin-right: 0.3em;
      margin-left: -1em;
    }

    img {
      max-width: 100%;
    }

    pre {
      overflow: auto;
    }
  `
