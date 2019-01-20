// Libraries
import React, { Component } from 'react'

import { Button, Text } from '/Users/eugeneross/Sites/numie-lib'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
  
    return (
<>
      <Button>Button</Button>
      <Text>green text</Text>
     </>

    )
  }
} 

