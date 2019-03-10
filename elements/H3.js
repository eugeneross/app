import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import colors from '../utils/colors'

export const H3 = styled.h3`
  font-family: 'Play', 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.black ? `${colors.black}` : `${colors.primary}` };
  text-align: ${props => props.center ? 'center' : (props.right ? 'right' : 'left')};
  margin: .5rem 0;
  ${media.tablet`
    font-size: 1.625rem;
  `}
 
`

export default H3