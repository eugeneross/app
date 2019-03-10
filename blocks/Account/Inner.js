import styled from 'styled-components'
import { media } from '../../utils/breakpoints';


const Inner = styled.div`

display: flex;
flex-direction: row;
padding: 2rem 1.25rem 2rem;
align-items: flex-start;
justify-content: space-between;
width: 100%;

&:last-child{
  align-items: flex-end;
  padding: 2rem 1.25rem 2rem;
  ${media.tablet`
    padding: 1.875rem;
  `}
}

${media.tablet`
  padding: 1.875rem;
`}

`

export default Inner