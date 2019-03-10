import styled from 'styled-components'
import { media } from '../../utils/breakpoints';

import {Column as BaseColumn} from '../../elements'

import {Account} from '../'

const Column = styled(BaseColumn)`

 ${media.tablet`
  padding: 0;
  margin-bottom: 1.875rem;

  &:last-child{
    margin-bottom: 0;
  }

&:nth-child(odd){
  padding-right: 0.9375rem !important;
}

&:nth-child(even){
  padding-left: 0.9375rem !important;
}

`}

${Account}{
  ${media.mobile`
    &:last-child{
      border-bottom: none;
    }
  `}
}

`

export default Column