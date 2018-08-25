import styled from 'styled-components'
import { media, colors } from '../utils'

const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
  color: ${colors.primary};
  
  ${media.tablet`
    font-size: 3rem;
  `};
`
export default H1