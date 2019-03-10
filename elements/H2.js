// Libraries
import styled, { css } from 'styled-components'

import { media } from '../utils/breakpoints'

const H2 = styled.h2`
  font-family: 'Play', 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 0.5rem;

  ${media.tablet`
    font-size: 2.25rem
  `};
`

export default H2
