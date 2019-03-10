// Libraries
import styled, { css } from 'styled-components'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors'
import { cubic, rounded } from '../utils/mixins'
import is from 'styled-is'

const Button = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  zoom: 1;
  text-align: center;
  line-height: 1em;
  padding: 1rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  ${'' /* letter-spacing: .02rem; */}
  border-radius: ${rounded};
  background: ${props => props.gray ? '#EBEBEB' : `${colors.primary}` };
  color: ${props => props.gray ? `${colors.black}` : `${colors.white}` };
  outline: none;
  border: none;
  cursor: pointer;
  ${'' /* text-transform: uppercase; */}
  ${'' /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06); */}
  transition: ${cubic('.3s')};

    &:hover{
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      transform: translateY(-1px);
      color: ${props => props.gray ? `${colors.black}` : `${colors.white}` };
    }

    ${is('fixed')`
      padding: 1rem 2rem;
      min-width: 5rem;
      ${media.mobile`
        padding: .9rem 1.3rem;
        font-size: .9rem;
      `};
    `}

    ${is('disabled')`
      opacity: .6;

      &:hover{
        cursor: not-allowed;
      }
    `}


`

export default Button
