import styled from 'styled-components'
import { media } from '../../utils/breakpoints';

import { Columns as BaseColumns } from '../../elements'

import Column from './Column'

const Columns = styled(BaseColumns)`

 flex-wrap: wrap;
 flex-direction: column;

 ${media.tablet`
  align-items: flex-start;
  flex-direction: row;
 `}



& > ${Column}{
  flex: 1 0 100%;
  ${media.tablet`
    flex: 1 0 50%;
  `}

  &:last-child{
    flex: 0 1 50%;
    ${media.mobile`
      flex: 1 0 100%;
    `}

  }
}

`

export default Columns
