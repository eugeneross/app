// Libraries
import styled, { css } from 'styled-components'
import is from 'styled-is'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors';
import { cubic } from '../utils/mixins';

const ValueInput = styled.div`

padding: .5rem;
margin-right: 5vw;
background: #EFF4FE;
border-radius: .25rem;
font-size: .875rem;
color: ${colors.primary};
transition: ${cubic('.3s')};

${media.tablet`
  margin-right: 1rem;
`}

&:hover{
  cursor: pointer;
  background: #E1EBFE;
}

`

export default ValueInput
