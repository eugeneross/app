import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@utils'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    
    const { Component, pageProps} = this.props

    // console.log(ThemeProvider, theme, this.props, Component);

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Page Title</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp