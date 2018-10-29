import styled from 'styled-components'

import colors from '../../utils/colors'
import { media } from '../../utils/breakpoints'

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

`

export default Test