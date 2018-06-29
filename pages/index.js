// Libraries
import React, { Component } from 'react'

import stylesheet from '../styles/index.sass'


import Nav from '../components/Nav'

import { Button } from 'tortuga-lib'

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

          index
    
        </main>
      </div>
    )
  }
}
