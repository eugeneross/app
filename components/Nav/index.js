// Library Imports
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Local Imports
import media from '../../utils/breakpoints'

// Modular Elements
import Columns from '../../elements/Columns'
import Column from '../../elements/Column'
import Container from '../../elements/Container'
import { Logo } from '../../elements/SVG/Logo'
import { USA } from '../../elements/SVG/Flags'

// Children Elements
import UserItem from './UserItem'
import NavItem from './NavItem'
import Mobile from './Mobile'

// Data
const companyImage = '/static/images/company-logo.png'
const companyName = 'Numie'

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (
      <div>
        <Header className="hero">
          <div className="hero-head">
            <Wrapper>
              <StyledContainer>
                <Columns isCentered>
                  <Column isSize="2/3">
                    <Link href="/">
                      <a>
                        <Logo />
                      </a>
                    </Link>
                    <NavItem active>
                      <span>Dashboard</span>
                    </NavItem>
                    <NavItem>
                      <span>Campaigns</span>
                    </NavItem>
                  </Column>
                  <Column isSize="1/3">
                    <UserItem>
                      <USA />
                    </UserItem>
                    <UserItem>
                      <img src={companyImage} />
                      <span>{companyName}</span>
                    </UserItem>
                  </Column>
                </Columns>
              </StyledContainer>
            </Wrapper>
          </div>
        </Header>
        <Mobile />
      </div>
    )
  }
}

const Header = styled.header`
  position: relative;
  padding-top: 1rem;
`

const Wrapper = styled.nav`
  background: transparent;
  position: relative;
  min-height: 3.25rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  ${media.tablet`
        padding: 1.5rem 0;
    `} 
    
    ${Column}:last-child {
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
`

const StyledContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  min-height: 3.25rem;
  width: 100%;
    ${media.touch`
        max-width: 100%;   
    `};
`
