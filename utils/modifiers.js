import colors from './colors'

const modifiers = {
  backgroundDark: () => `
    background: ${colors.primary};
  `,

  colorRed: () => `
    color: ${colors.secondary};
  `,

  backgroundWhite: () => `
    background: white;
  `
}

export default modifiers
