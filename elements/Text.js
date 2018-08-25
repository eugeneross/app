// Libraries
import styled from 'styled-components'

import { colors, media } from '../utils'

const Text = styled.p`
  color: ${colors.text};
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;

  ${media.tablet`
    font-size: 1.25rem
  `}
  
`

export default Text
