// Library Imports
import styled from 'styled-components'
import is from 'styled-is'

// Local Utilities
import media from '../../utils/breakpoints'
import { cubic } from '../../utils/mixins'

const NavItem = styled.a`
  ${media.mobile`
    display: none;
  `} 

  align-items: center;
  color: white;
  margin-left: 4vw;
  font-size: 1.125rem;
  font-weight: 400;
  position: relative;
  letter-spacing: 0.02rem;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  position: relative;

  &:hover {
    cursor: pointer;
    color: white;
    span {
      transform: translateY(-0.2rem);
    }
  }

  span {
    ${cubic('.3s')};
  }

  ${is('active')`
        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: .3125rem;
            top: -3.3rem;
            background-color: white;
            cursor: default;
        }
    `};
`
export default NavItem
