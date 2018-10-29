// Library Imports
import React, { Component } from 'react'
import Link from 'next/link'

import {

} from '../elements'

import {
  Test
} from '../blocks'

export default class TestComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (

      <Test>
        This is in Test
        <p>this is in paragraph.</p>
      </Test>

    )
  }
}
