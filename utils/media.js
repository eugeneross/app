import { css } from 'styled-components'

const sizes = {
  fullhd: 1440,
  widescreen: 1280,
  desktop: 992,
  tablet: 768,
  phablet: 540,
  largePhone: 414,
  phone: 375,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {

  const remSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})