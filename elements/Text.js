// Libraries
import styled, { css } from 'styled-components'
import is from 'styled-is'

import { media } from '../utils/breakpoints'

const Text = styled.p`
  color: ${props => props.white ? '${colors.white}' : '${colors.darkText}'};
  font-size: 1rem;
  margin-bottom: .5rem;
  line-height: 1.8;
  text-align: ${props => props.center ? 'center' : (props.right ? 'right' : 'left')};
  margin-top: 0;

  ${'' /* ${media.tablet`
    font-size: 1.125rem
  `}; */}

  ${is('small')`
  
  font-size: .875rem;

   `}

  ${is('medium')`

  font-size: 1.25rem;

  `}

`

export default Text
