// Library Imports
import React, { Component } from 'react'
import Link from 'next/link'

import {

} from '../elements'

import {
  Test
} from '../components'

export default class TestContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (

      <Test red/>

    )
  }
}
