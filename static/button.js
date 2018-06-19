// Libraries
import React, { Component } from 'react'
import Link from 'next/link'
import StyledButton from './styles'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return this.props.href ? (
      <StyledButton target="_blank" href={this.props.href} {...this.props}>
        {this.props.text}
      </StyledButton>
    ) : (
      <Link href={this.props.link}>
        <StyledButton {...this.props}>{this.props.text}</StyledButton>
      </Link>
    )
  }
}

// <Button
//     className=' additional classnames '
//     href=' use this prop if link is outbound '
//     link=' use this prop if link is internal'
//     text=' button text '
// />
