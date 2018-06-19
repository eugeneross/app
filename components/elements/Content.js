// Libraries
import styled, { css } from 'styled-components'

import { media } from '../../utils/breakpoints'

const StyledContent = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: 0;
  max-width: 31.25rem;
  ${media.tablet`
    margin-left: auto;
    margin-right: auto;
  `};
`

export default StyledContent
