import React from "react"
import PropTypes from "prop-types"
import { Box, Button } from "rebass"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const theme = {
  colors: {
    background: "#0A184A",
    heading: "#fff",
    subheading: "#5772A1",
  },
  buttons: {
    primary: {
      color: "#000",
    },
  },
}

const GlobalStyle = createGlobalStyle`
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Box is="main">{children}</Box>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
