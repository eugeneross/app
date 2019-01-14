// Libraries
import styled from 'styled-components'

import { media } from '@utils'


const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: ${p => p.center ? `center` : ((p.right) ? `right` : `left`)};

  ${media.tablet`
    font-size: 1.25rem
  `}
  
`

export default Text
