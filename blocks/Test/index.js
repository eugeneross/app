import styled from 'styled-components'
import is from 'styled-is'

import { media } from '@utils'

const Test = styled.div`

  font-family: 'Play-Bold', 'Open Sans', serif;
  position: relative;
  color: red;
  transition: ${p => p.theme.transitions.cubic2('.3s')};

  ${media.tablet`
    color: blue;
  `}

  p{
    color: blue;
    ${media.tablet`
      color: ${p => p.theme.colors.white};
    `}
  }

  ${is('red')`
    background: red;
  `}

`

export default Test