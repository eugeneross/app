// Libraries
import React, { Component } from 'react'

import stylesheet from '../styles/index.sass'

// import { Button } from 'tortuga-lib'

import {
  H1,
  Container
} from '../elements'


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
        <main>

          <Container>Sup</Container>

          {/* <Button>Click Me</Button> */}

        </main>
      </div>
    )
  }
}

