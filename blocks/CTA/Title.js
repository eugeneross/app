// Libraries
import styled, { css } from 'styled-components'

import H2 from '../../elements/H2.js'

const Title = H2.extend`
  color: ${props => (props.background ? white : null)};
`

export default Title