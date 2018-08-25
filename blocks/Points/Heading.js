// Libraries
import styled, { css } from 'styled-components'

import { media } from '../../../utils'

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 0 2vw;

  ${media.tablet`
      max-width: 25rem;
      padding: 0;
    `};
`

export default Heading
