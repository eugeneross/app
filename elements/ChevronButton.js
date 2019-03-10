import styled from 'styled-components'

import Button from './Button'
import colors from '../utils/colors';
import { media } from '../utils/breakpoints';
import { cubic } from '../utils/mixins';

import is from 'styled-is'

const ChevronButton = styled(Button)`

background: transparent;
padding: 0;
text-align: left;
color: ${colors.primary};
font-size: 1rem;
font-weight: 400;
position: relative;
align-self: flex-start;
width: auto !important;

${is('center')`
  margin: 1.25rem auto;
  
`}


&:hover{
  box-shadow: none;
  color: ${colors.primary};
  transform: none;
  &:after{
    transform: translateX(.25rem);
  }
}

&:after{
  content: '';
  position: absolute;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJwYXRoLTEtaW5zaWRlLTEiIGZpbGw9IndoaXRlIj4KPHBhdGggZD0iTTYuODA5OTQgNS41MzE3NkwxLjUwNzU4IDAuMTkxNzA2QzEuMzg0OTUgMC4wNjgwOTcgMS4yMjEyNCAwIDEuMDQ2NjggMEMwLjg3MjExOCAwIDAuNzA4NDA4IDAuMDY4MDk3IDAuNTg1NzcxIDAuMTkxNzA2TDAuMTk1Mjg5IDAuNTg0ODczQy0wLjA1ODc5OTkgMC44NDEwNjYgLTAuMDU4Nzk5OSAxLjI1NzQ1IDAuMTk1Mjg5IDEuNTEzMjZMNC42NDc4MSA1Ljk5NzUxTDAuMTkwMzQ5IDEwLjQ4NjdDMC4wNjc3MTE5IDEwLjYxMDQgLTcuNjg2MmUtMDggMTAuNzc1MSAtNy42ODYyZS0wOCAxMC45NTA4Qy03LjY4NjJlLTA4IDExLjEyNjcgMC4wNjc3MTE5IDExLjI5MTUgMC4xOTAzNDkgMTEuNDE1MkwwLjU4MDgzMSAxMS44MDgzQzAuNzAzNTY1IDExLjkzMTkgMC44NjcxNzggMTIgMS4wNDE3NCAxMkMxLjIxNjMgMTIgMS4zODAwMSAxMS45MzE5IDEuNTAyNjQgMTEuODA4M0w2LjgwOTk0IDYuNDYzMzZDNi45MzI4NyA2LjMzOTM2IDcuMDAwMzkgNi4xNzM4IDcgNS45OTc4MUM3LjAwMDM5IDUuODIxMTIgNi45MzI4NyA1LjY1NTY2IDYuODA5OTQgNS41MzE3NloiLz4KPC9tYXNrPgo8cGF0aCBkPSJNNi44MDk5NCA1LjUzMTc2TDEuNTA3NTggMC4xOTE3MDZDMS4zODQ5NSAwLjA2ODA5NyAxLjIyMTI0IDAgMS4wNDY2OCAwQzAuODcyMTE4IDAgMC43MDg0MDggMC4wNjgwOTcgMC41ODU3NzEgMC4xOTE3MDZMMC4xOTUyODkgMC41ODQ4NzNDLTAuMDU4Nzk5OSAwLjg0MTA2NiAtMC4wNTg3OTk5IDEuMjU3NDUgMC4xOTUyODkgMS41MTMyNkw0LjY0NzgxIDUuOTk3NTFMMC4xOTAzNDkgMTAuNDg2N0MwLjA2NzcxMTkgMTAuNjEwNCAtNy42ODYyZS0wOCAxMC43NzUxIC03LjY4NjJlLTA4IDEwLjk1MDhDLTcuNjg2MmUtMDggMTEuMTI2NyAwLjA2NzcxMTkgMTEuMjkxNSAwLjE5MDM0OSAxMS40MTUyTDAuNTgwODMxIDExLjgwODNDMC43MDM1NjUgMTEuOTMxOSAwLjg2NzE3OCAxMiAxLjA0MTc0IDEyQzEuMjE2MyAxMiAxLjM4MDAxIDExLjkzMTkgMS41MDI2NCAxMS44MDgzTDYuODA5OTQgNi40NjMzNkM2LjkzMjg3IDYuMzM5MzYgNy4wMDAzOSA2LjE3MzggNyA1Ljk5NzgxQzcuMDAwMzkgNS44MjExMiA2LjkzMjg3IDUuNjU1NjYgNi44MDk5NCA1LjUzMTc2WiIgc3Ryb2tlPSIjNUM5MEU4IiBzdHJva2Utd2lkdGg9IjQiIG1hc2s9InVybCgjcGF0aC0xLWluc2lkZS0xKSIvPgo8L3N2Zz4K') no-repeat center center;
  width: .5rem;
  height: .75rem;
  right: -1rem;
  top: .2rem;
  bottom: 0;
  transition: ${cubic('.3s')};

  ${media.tablet`
    top: .3rem;
  `}
  

}

${media.tablet`
  font-size: 1.25rem;
`}

`

export default ChevronButton