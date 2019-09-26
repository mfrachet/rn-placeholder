import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import { styles } from "./styles"
import { lightTheme } from "./lightTheme"

export const Theme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <Global styles={styles} />
    {children}
  </ThemeProvider>
)
