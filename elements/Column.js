import styled from "styled-components";

import { Column as BloomerColumn } from 'bloomer'
import { media } from "../utils/breakpoints"
import is from 'styled-is'

const Column = styled(BloomerColumn)`
  && {

      padding: 0;


    ${media.tablet`

    flex-wrap: wrap;
    align-items: center;
    display: flex;

      &:first-child{
        padding-left: 0;
      }

      &:last-child{
        padding-right: 0;
      }

      ${is('isBuyDash')`
        flex: 0 0 calc(100% - 23.4375rem);
        width: calc(100% - 23.4375rem);
      `}
    `}
  }
`

export default Column
