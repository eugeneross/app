import styled from 'styled-components'
import { media } from '../../utils/breakpoints';

import {Label} from '../../elements'

const Type = styled.div`

padding: .5rem 0;
background: #FAFBFF;
display: flex;
flex-direction: row;
align-items: center;

${Label}{
  margin: 0;
  ${media.tablet`
    margin-left: 1.25rem;
  `}
}

${media.tablet`
  background: transparent;
  padding: 1.875rem;
  padding-bottom: 0;
  &:first-child{
    padding-top: 3.125rem;
  }
`}

`

export default Type

