import styled from 'styled-components'
import is from 'styled-is'

import { media } from '@utils'

const Test = styled.div`

  font-family: 'Play-Bold', 'Open Sans', serif;
  position: relative;
  color: red;

  ${media.tablet`
    color: blue;
  `}

  p{
    color: blue;
    ${media.tablet`
      color: green;
    `}
  }

  ${is('red')`
    background: red;
  `}

`

export default Test