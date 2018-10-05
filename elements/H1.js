import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import colors from '../utils/colors'
import { rounded, cubic } from '../utils/mixins';

const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
  color: ${colors.primary};
  transition: ${cubic('.3s')};
  
  ${media.tablet`
    font-size: 3rem;
    color: red;
    background: black;
    border-radius: ${rounded}
  `}
`
export default H1