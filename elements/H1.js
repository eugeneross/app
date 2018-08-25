import styled from 'styled-components'
import media from '../utils/breakpoints'

const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
  color: white;

  ${'' /* ${media.mediumPhone`
    font-size: 4rem;
  `}  */}
  
  ${media.tablet`
    font-size: 3rem;
  `};
`
export default H1