// Library Imports
import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import is from 'styled-is'

// Modular Elements
import Columns from '../../../elements/Columns'
import Column from '../../../elements/Column'

// Local Utilities
import { media } from '../../../utils/breakpoints'

export default class Mobile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Mobile nav Component mounted.')
  }
  render() {
    return (
      <Wrapper>
        <Columns isCentered>
          <Column>
            <Link href="/dashboard">
              <NavItem active>
                <span>Dashboard</span>
              </NavItem>
            </Link>
          </Column>
          <Column>
            <Link href="/campaigns">
              <NavItem>
                <span>Campaigns</span>
              </NavItem>
            </Link>
          </Column>
        </Columns>
      </Wrapper>
    )
  }
}

export const Wrapper = styled.div`

  ${media.tablet`
        display: none;
  `} 
    
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${Column} {
    justify-content: center;
  }
`

export const NavItem = styled.a`
  font-size: 1.125rem;
  text-align: center;
  padding: 1.875rem 0;
  width: 100%;
  color: white;

  &:hover {
    color: white;
  }
  ${is('active')`
        box-shadow: inset 0 -5px 0px white;
    `} ${'' /* span a {
        color: white:
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    } */};
`
