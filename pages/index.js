// Libraries
import React, { Component } from 'react'

import { Button, Text } from 'numie-lib'

import { Button as Button2} from '@elements'

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
<>
      <Button>Button</Button>
      <Button2>Hello</Button2>
      <Text>green text</Text>
     </>

    )
  }
} 

