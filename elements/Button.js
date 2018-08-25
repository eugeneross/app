// Libraries
import styled from 'styled-components'

import { colors } from '../utils'

import { cubic, rounded } from '../utils/mixins'

const Button = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  zoom: 1;
  text-align: center;
  line-height: 1em;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: ${rounded};
  background: ${colors.primary};
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  transition: ${cubic('.3s')};

    &:hover{
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
      color: white;
    }

`

export default Button
