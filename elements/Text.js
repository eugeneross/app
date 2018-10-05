// Libraries
import styled from 'styled-components'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors'

const Text = styled.p`
  color: ${colors.text};
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: ${props => props.center ? `center` : ((props.right) ? `right` : `left`)};

  ${media.tablet`
    font-size: 1.25rem
  `}
  
`

export default Text
