// Libraries
import React, { Component } from 'react'

import stylesheet from '../styles/index.sass'
import styled from 'styled-components'

import Nav from '../components/Nav'
import { media } from '../utils'

// import { Button } from 'tortuga-lib'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.', media)
  }
  render() {
    return (
      <div>
        <main>

          <MyDiv>index</MyDiv>

        </main>
      </div>
    )
  }
}

const MyDiv = styled.div`
  color: white;
  background: gray;
  ${media.tablet`
    background: yellow;
    color: black;
  `}
`
