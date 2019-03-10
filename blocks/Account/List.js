import styled from 'styled-components'
import { media } from '../../utils/breakpoints';


const List = styled.div`

position: relative;
display: flex;
flex-direction: column;

${media.tablet`
  padding: 1.875rem;
  flex-direction: row;
  /* flex: 1 0 50%; */
  flex-wrap: wrap;
`}

`

export default List