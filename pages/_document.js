import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../utils/globals'

import ReactGA from 'react-ga'

const page = {
  index: {
    title: 'Title',
    description: 'Description',
    url: 'https://domain.url',
    keywords: 'Keywords',
    facebookShare: '/static/images/meta/share.png',
    twitterShare: '/static/images/meta/share.png',
    favicon: {
      png: '/static/images/meta/favicons/favicon.png',
      ico: '/static/images/meta/favicons/favicon.ico',
      iphone: '/static/images/meta/favicons/touch-icon-iphone.png',
      svg: '/static/images/meta/favicons/mask.svg'
    }
  }
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  componentDidMount() {
    document.documentElement.className = 'js'
    //Google Analytics
    ReactGA.initialize('UA-XXXX-X')
    ReactGA.pageview(document.location.pathname)
  }

  render() {
    //console.log(stylesheet)
    const { buildManifest } = this.props
    const { css } = buildManifest

    return (
      <html>
        <Head>
          <title>{page.index.title}</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta content="width=device-width" name="viewport" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="apple-touch-fullscreen" />

          <link rel="icon" href={page.index.favicon.ico} type="image/x-icon" />
          <link rel="shortcut icon" href={page.index.favicon.ico} />
          <link rel="icon" type="image/png" href={page.index.favicon.png} />
          <link rel="apple-touch-icon" href={page.index.favicon.iphone} />
          <link rel="mask-icon" href={page.index.favicon.svg} color="#141516" />

          {/* Google content */}
          <meta content={page.index.description} name="application-name" />
          <meta content={page.index.description} name="description" />
          <meta content={page.index.title} name="author" />
          <meta content={page.index.keywords} name="keywords" />
          <meta content={new Date().getYear()} name="copyright" />

          {/*Facebook content*/}
          <meta content="website" property="og:type" />
          <meta content={page.index.title} property="og:title" />
          <meta content={page.index.description} property="og:description" />
          <meta content={page.index.facebookShare} property="og:image" />
          <meta content={page.index.url} property="og:url" />
          <meta content="1200" property="og:image:width" />
          <meta content="630" property="og:image:height" />
          <meta content={page.index.description} property="og:site_name" />

          {/*Twitter content*/}
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={page.index.title} name="twitter:title" />
          <meta content={page.index.description} name="twitter:description" />
          <meta content={page.index.twitterShare} name="twitter:image" />
          <meta content="@twitter_handle" name="twitter:site" />
          <meta content="@twitter_handle" name="twitter:creator" />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,800"
            rel="stylesheet"
          />

          {this.props.styleTags}

          {css.map(file => {
            return <link rel="stylesheet" href={`/_next/${file}`} key={file} />
          })}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
