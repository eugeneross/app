// Libraries
import styled, { css } from 'styled-components'

import media from '../../utils/breakpoints'
import colors from '../../utils/colors'
import { cubic, rounded } from '../../utils/mixins'

const A = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  zoom: 1;
  text-align: center;
  line-height: 1em;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: ${rounded};
  background: ${colors.primary};
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  ${cubic('.25s')};

    &:hover{
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
      color: white;
    }

    ${p =>
      p.secondary &&
      css`
        background: ${colors.secondary};
      `}

    ${p =>
      p.tertiary &&
      css`
        background: none;
        color: ${colors.tertiary};
        box-shadow: none;
        padding: 0 0 0.5rem 0 !important;
        text-transform: none;
        font-weight: normal;
        font-size: 1rem !important;
        border-bottom: 1px solid ${colors.tertiary};
        border-radius: 0;
        &:hover {
          text-decoration: none;
          box-shadow: none;
          transform: none;
          color: initial;
          border-bottom: 1px solid inherit;
        }
      `}

    ${p =>
      p.large &&
      css`
        padding: 1.5rem 3rem !important;
        font-size: 1rem !important;
      `}

    ${p =>
      p.outline &&
      css`
        background: transparent;
        color: ${colors.primary};
        box-shadow: inset 0px 0px 0px 1px;
      `}

    ${p =>
      p.fixed &&
      css`
        padding: 1rem 3rem;
        min-width: 12.5rem;
        ${media.mobile`
        padding: .9rem 1.3rem;
        font-size: .9rem;
      `};
      `}

  ${media.mediumPhone`
      padding: 1rem 1.3rem;
      font-size: .9rem;
    `}


`

export default A
