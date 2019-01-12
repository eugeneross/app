import styled from 'styled-components'
import { theme } from '@utils'

import { media } from '@utils'

const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
  color: ${p.theme.colors.primary};
  transition: ${p.theme.transitions.cubic('.3s')};
  
  ${media.tablet`
    font-size: 3rem;
    color: red;
    background: black;
    border-radius: .25rem
  `}
`
export default H1