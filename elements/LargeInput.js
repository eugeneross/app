// Libraries
import styled, { css } from 'styled-components'
import is from 'styled-is'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors';

const LargeInput = styled.input`

font-size: 2.5rem;
color: ${colors.primary};
width: 100%;
outline: none;
border: none;
margin-left: 1rem;

&::placeholder{
  color: ${colors.lightBlue};
}

${media.tablet`
  font-size: 5vw;
`}


`

export default LargeInput

