import styled from 'styled-components'
import colors from '../utils/colors';
import { cubic, rounded } from '../utils/mixins';
import is from 'styled-is'

import Input from './Input'

const Select = styled.select`
  position: relative;
  appearance: none;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxMyA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNOS44MDk5MzkyLDMuNTMxNzYwOCBMNC41MDc1NzkyLC0xLjgwODI5MzIgQzQuMzg0OTQ5MiwtMS45MzE5MDIyIDQuMjIxMjM5MiwtMS45OTk5OTkyIDQuMDQ2Njc5MiwtMS45OTk5OTkyIEMzLjg3MjExNzIsLTEuOTk5OTk5MiAzLjcwODQwNzIsLTEuOTMxOTAyMiAzLjU4NTc3MDIsLTEuODA4MjkzMiBMMy4xOTUyODgyLC0xLjQxNTEyNjIgQzIuOTQxMTk5MywtMS4xNTg5MzMyIDIuOTQxMTk5MywtMC43NDI1NDkxOTggMy4xOTUyODgyLC0wLjQ4NjczOTE5OCBMNy42NDc4MDkyLDMuOTk3NTEwOCBMMy4xOTAzNDgyLDguNDg2NzAwOCBDMy4wNjc3MTExLDguNjEwNDAwOCAyLjk5OTk5OTEyLDguNzc1MTAwOCAyLjk5OTk5OTEyLDguOTUwODAwOCBDMi45OTk5OTkxMiw5LjEyNjcwMDggMy4wNjc3MTExLDkuMjkxNTAwOCAzLjE5MDM0ODIsOS40MTUyMDA4IEwzLjU4MDgzMDIsOS44MDgzMDA4IEMzLjcwMzU2NDIsOS45MzE5MDA4IDMuODY3MTc3MiwxMC4wMDAwMDA4IDQuMDQxNzM5MiwxMC4wMDAwMDA4IEM0LjIxNjI5OTIsMTAuMDAwMDAwOCA0LjM4MDAwOTIsOS45MzE5MDA4IDQuNTAyNjM5Miw5LjgwODMwMDggTDkuODA5OTM5Miw0LjQ2MzM2MDggQzkuOTMyODY5Miw0LjMzOTM2MDggMTAuMDAwMzg5Miw0LjE3MzgwMDggOS45OTk5OTkyLDMuOTk3ODEwOCBDMTAuMDAwMzg5MiwzLjgyMTEyMDggOS45MzI4NjkyLDMuNjU1NjYwOCA5LjgwOTkzOTIsMy41MzE3NjA4IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBpZD0iU2hhcGUiIGZpbGw9IiNCRkNGRTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTAwMDAwLCA0LjAwMDAwMSkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTYuNTAwMDAwLCAtNC4wMDAwMDEpICIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==');
  background-color: transparent;
  background-position: right .5rem top .5rem;
  background-repeat: no-repeat;
  padding-bottom: 1rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #BFCFE3;
  color: #D4D4D4;
  width: 100%;
  cursor: pointer;
  border-radius: 0;

  &:active,&:focus{
    outline: none;
  }

  ${is('isSelected')`
    color: #141516 !important;
  `}

  ${is('disabled')`
    cursor: not-allowed;
    color: rgba(20, 21, 22, .4);
  `}

  ${is('dark')`
    color: #BFCFE3;
  `}

  ${is('filled')`
    border: none;
    border-bottom: 1px solid ${colors.primary};
    outline: none;
  `}

  ${is('hasError')`
    border: none;
    border-bottom: 1px solid red;
    outline: none;
  `}

`

export default Select
