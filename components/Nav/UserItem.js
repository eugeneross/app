// Library Imports
import styled, { css } from 'styled-components'

// Local Utilities
import { rounded } from '../../utils/mixins'

const UserItem = styled.div`
  align-items: center;
  padding: 0.8rem 2rem 0.8rem 0.75rem;
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  ${rounded};

  &:last-child {
    margin-left: 1rem;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  svg {
    height: 1.25rem;
    width: 2.25rem;
  }

  &:after {
    content: '';
    position: absolute;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02LjgwOTk0IDUuNTMxNzZMMS41MDc1OCAwLjE5MTcwNkMxLjM4NDk1IDAuMDY4MDk3IDEuMjIxMjQgMCAxLjA0NjY4IDBDMC44NzIxMTggMCAwLjcwODQwOCAwLjA2ODA5NyAwLjU4NTc3MSAwLjE5MTcwNkwwLjE5NTI4OSAwLjU4NDg3M0MtMC4wNTg3OTk5IDAuODQxMDY2IC0wLjA1ODc5OTkgMS4yNTc0NSAwLjE5NTI4OSAxLjUxMzI2TDQuNjQ3ODEgNS45OTc1MUwwLjE5MDM0OSAxMC40ODY3QzAuMDY3NzExOSAxMC42MTA0IC03LjY4NjJlLTA4IDEwLjc3NTEgLTcuNjg2MmUtMDggMTAuOTUwOEMtNy42ODYyZS0wOCAxMS4xMjY3IDAuMDY3NzExOSAxMS4yOTE1IDAuMTkwMzQ5IDExLjQxNTJMMC41ODA4MzEgMTEuODA4M0MwLjcwMzU2NSAxMS45MzE5IDAuODY3MTc4IDEyIDEuMDQxNzQgMTJDMS4yMTYzIDEyIDEuMzgwMDEgMTEuOTMxOSAxLjUwMjY0IDExLjgwODNMNi44MDk5NCA2LjQ2MzM2QzYuOTMyODcgNi4zMzkzNiA3LjAwMDM5IDYuMTczOCA3IDUuOTk3ODFDNy4wMDAzOSA1LjgyMTEyIDYuOTMyODcgNS42NTU2NiA2LjgwOTk0IDUuNTMxNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMikgcm90YXRlKDkwKSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==') no-repeat center center;
    right: 0.6rem;
    top: 1rem;
    bottom: 0;
    width: 1rem;
    height: 0.75rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    span {
      display: none;

      @media screen and (min-width: 53.75rem) {
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        padding-left: 0.5rem;
        padding-right: 1rem;
        line-height: 1.5;
        display: block;
      }
      /*
        max-width: 6.25rem;
         overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; 

        if we want to cut text off */
    }
  }
`

export default UserItem
