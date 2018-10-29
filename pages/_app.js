import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../utils/globals'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Page Title</title>
        </Head>

          <Component {...pageProps} />

      </Container>
    )
  }
}

export default MyApp