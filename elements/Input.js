// Libraries
import styled from 'styled-components'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors';
import is from 'styled-is'

const Input = styled.input`
  color: ${colors.black};
  padding-bottom: 1rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${colors.lightBlueGray};
  width: 100%;

  &::placeholder{
    color: #D4D4D4;
  }

  &:focus{
    border: none;
    border-bottom: 1px solid ${colors.primary};
    outline: none;
  }

  ${is('filled')`
    border: none;
    border-bottom: 1px solid ${colors.primary};
    outline: none;
  `}

  ${is('hasError')`
    border: none;
    border-bottom: 1px solid red;
    outline: none;
  `}

  &[type="radio"] {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    max-width: 1.5rem;
    cursor: pointer;
    position: relative;
  }

  &[type="radio"]:before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 12px;
    width: 12px;
    top: 5px;
    left: 0px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
    border: 1px solid ${colors.primary};
    background-color: ${colors.white};
  }

  &[type='radio']:checked:after {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 6px;
    width: 6px;
    top: 8px;
    left: 3px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
    border: 1px solid ${colors.primary};
    background-color: ${colors.primary};
  }

  ${is('disabled')`
  cursor: not-allowed;
  color: rgba(20, 21, 22, .4);
`}

`

export default Input
