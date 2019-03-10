// Libraries
import React, { Component } from 'react'

import { Accounts } from './components'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {

    console.log(Button);
  
    return (

        <Accounts></Accounts>

    )
  }
} 

