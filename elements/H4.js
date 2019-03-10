import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import colors from '../utils/colors'

export const H4 = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.primary};
  text-transform: uppercase;
  text-align: ${props => props.center ? 'center' : (props.right ? 'right' : 'left')};
  margin: .5rem 0;
 
`

export default H4