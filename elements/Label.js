// Libraries
import styled from 'styled-components'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors';

const Label = styled.label`
  color: ${colors.blueGray};
  text-transform: uppercase;
  letter-spacing: .02rem;
  margin-bottom: .5rem;
  font-size: .875rem;
  font-weight: 600;
  display: block;
`

export default Label
