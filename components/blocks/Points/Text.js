// Libraries
import styled, { css } from 'styled-components'

import { media } from '../../../utils/breakpoints'

import P from '../../elements/P.js'

const Text = P.extend`
  ${media.tablet`
      font-size: 1.125rem;
    `};
`

export default Text
