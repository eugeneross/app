import styled from 'styled-components'
import { media } from './breakpoints'

export const H1 = styled.h1`
  font-size: calc(1rem + 5vw);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1;

  ${media.mediumPhone`
    font-size: 4rem;
  `} ${media.desktop`
    font-size: 5rem;
  `};
`

export const H2 = styled.h2`
  font-size: calc(0.8rem + 5vw);
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin-bottom: 0.5rem;

  ${media.tablet`
    font-size: calc(.2rem + 4vw);
  `} ${media.desktop`
    font-size: 2.625rem;
  `};
`

export const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
