// Libraries
import styled, { css } from 'styled-components'

import media from '../../utils/breakpoints'

const P = styled.p`
  color: #585858;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;

  ${media.tablet`
    font-size: 1.125rem
  `};
`

export default P
