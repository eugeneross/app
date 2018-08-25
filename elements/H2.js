// Libraries
import styled, { css } from 'styled-components'

import media from '../../utils/breakpoints'

const H2 = styled.h2`
  font-size: calc(0.8rem + 3vw);
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 0.5rem;

  ${media.tablet`
    font-size: 2rem
  `};
`

export default H2
