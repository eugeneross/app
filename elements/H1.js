import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import colors from '../utils/colors';

const H1 = styled.h1`
  font-family: 'Play', 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
  color: ${colors.primary};

  ${'' /* ${media.mediumPhone`
    font-size: 4rem;
  `}  */}

  ${media.tablet`
    font-size: 3rem;
  `};
`
export default H1
