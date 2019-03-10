// Libraries
import styled, { css } from 'styled-components'
import is from 'styled-is'
import { media } from '../utils/breakpoints'
import { rounded } from '../utils/mixins';

const Card = styled.div`

width: 100%;
position: relative;
background: white;
box-shadow: 0px 2px 5px rgba(14, 30, 37, 0.06);
border-radius: ${rounded};
${is('transaction')`
  ${media.tablet`
    padding-bottom: 1.875rem;
  `}
`}

`

export default Card
