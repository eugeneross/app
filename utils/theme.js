

import { keyframes } from 'styled-components'

// Colors

const primary = '#5C90E8'
const black = '#141516'
const white = '#ffffff'
const gray = '#EFEFEF'
const text = '#444444'


// Animations

const flicker = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`

// Transitions

const transitions = {

  cubic: time => {
    return `all ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  },
  cubic2: time => {
    return `all ${time} cubic-bezier(.215,.61,.355,1)`
  },
  cubic3: time => {
    return `all ${time} cubic-bezier(.86,0,.07,1)`
  },
  ease: time => {
    return `all ${time} ease-in-out`
  }

}

export const theme = {
  colors: {
    primary,
    black,
    white,
    gray,
    text,
  },
  animations: {
    flicker,
  },
  transitions,
  placeholder: {
    dark: 'rgba(0, 0, 0, 0.25)',
    light: 'rgba(0, 0, 0, 0.25)',
  },
  input: {
    border: '#b9bbbe',
  },
}
