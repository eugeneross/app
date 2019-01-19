// Libraries
import React, { Component } from 'react'

import { Button } from 'numie-lib';

// import {
//   Text
// } from '../elements'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    console.log(Button)
    return (

      <Button>Button</Button>

    )
  }
} 

