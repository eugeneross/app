// Libraries
import React, { Component } from 'react'

// import stylesheet from '../styles/index.sass'

import {
  H1,
  Container,
  Main
} from '../elements'

import {
  Test
} from '../containers'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (

        <Main>
          <Test/>
        </Main>

    )
  }
}

