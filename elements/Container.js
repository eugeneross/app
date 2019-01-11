// Libraries
import styled from 'styled-components'

import { media } from '@utils'

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  ${media.tablet`
    max-width: 80rem;
    padding-left: 4vw;
    padding-right: 4vw;
  `}

  ${'' /* ${media.desktop`
    max-width: 93.75rem;
  `}

  ${media.widescreen`
    max-width: 100rem;
  `} */}


`

export default Container
