import { injectGlobal } from 'styled-components'
// import normalize from '~normalize.css'

injectGlobal`

html{
  height: 100%;
  background: white;
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
  background: white;
  color: #141516;
  line-height: 1.5;
  width: 100vw;
  overflow-x: hidden;
  }

.columns:last-child{
  margin-bottom: 0 !important;
  }
.columns{
  margin: 0;
  }

.undefined {
  border: 1px solid red !important;
  }

  section{padding: 4rem 0}

  .columns{
    width: 100%;
    margin: 0 auto;
    .column{
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      display: flex;
      padding: 0;
      .content{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: 31.25rem;
        
      }
    }
  }

`
