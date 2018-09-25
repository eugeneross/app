const mixins = {
  transition: {
    cubic: time => {
      return `all ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94)`
    },
    cubic2: time => {
      return `all ${time} cubic-bezier(.215,.61,.355,1)`
    },
    ease: time => {
      return `all ${time} ease-in-out`
    }
  },

  radius: {
    rounded: `.25rem`,
    superRounded: `.5rem`,
    pill: `10rem`
  }
}

export const cubic = mixins.transition.cubic
export const cubic2 = mixins.transition.cubic2
export const ease = mixins.transition.ease

export const rounded = mixins.radius.rounded
export const superRounded = mixins.radius.superRounded
export const pill = mixins.radius.pill

export default mixins
