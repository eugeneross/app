import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyle = createGlobalStyle`

html{
  height: 100%;
  background-color: white;
  font-size: 1rem;
  min-width: 18.75rem;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-overflow-scrolling: touch;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

body{
  margin: 0;
  padding: 0;
  font-family: 'Open sans', BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  position: relative;
  color: ${colors.black};
  line-height: 1.5;
  width: 100vw;
  overflow-x: hidden;
  }

.undefined {
  border: 1px solid red !important;
  }

`

export default GlobalStyle
