import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'
// import font from './typography'

const GlobalStyle = createGlobalStyle`

${'' /* ${font('Play-Bold', '600')} */}

:root {
  -ms-overflow-style: -ms-autohiding-scrollbar;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  cursor: default;
  font-size: 1rem;
  line-height: 1.4;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-overflow-scrolling: touch;
}

html{
  height: 100%;
  background-color: white;
  min-width: 18.75rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

body{
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  position: relative;
  color: ${theme.colors.black};
  line-height: 1.5;
  width: 100vw;
  overflow-x: hidden;
  }

.undefined {
  border: 1px solid red !important;
  }

`

export default GlobalStyle
