import styled from 'styled-components'
import is from 'styled-is'

import {media} from '../utils/breakpoints'

const Main = styled.main`

position: relative;

  &:before{
    position: absolute;
    content: '';
    height: 12.6rem;
    width: 100vw;
    background: #EFF0F4;
    top: 0;
    ${media.tablet`
      height: 22rem;
    `}
  }

  ${is('banner')`
    &:before{
      background: transparent;
    }
  `}

`

export default Main
