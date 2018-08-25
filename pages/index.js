// Libraries
import React, { Component } from 'react'

import stylesheet from '../styles/index.sass'

import {
  H1
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

          <H1>index</H1>

        </main>
      </div>
    )
  }
}

