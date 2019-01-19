// Libraries
import React, { Component } from 'react'

import { validatePhone } from 'input-validator-lib';

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
    console.log(validatePhone)
    return (

      <div>
        check console for validator
      </div>

    )
  }
} 

