// Libraries
import React, { Component } from 'react'

import stylesheet from '../styles/index.sass'

import {
  H1,
  Container,
  Main
} from '../elements'

import {
  Test
} from '../components'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (
      <div>
        <Main>

          <Container>
            Sup
            <Test/>
          </Container>

        </Main>
      </div>
    )
  }
}

