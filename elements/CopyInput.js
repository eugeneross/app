// Libraries
import styled, { css } from 'styled-components'
import is from 'styled-is'

import { media } from '../utils/breakpoints'
import colors from '../utils/colors';

const CopyInput = styled.input`

background: ${colors.white};
border: 2px solid ${colors.primary};
border-top-left-radius: .25rem;
border-top-right-radius: .25rem;
color: ${colors.black};
width: 100%;
padding: 1rem 0 1rem 1rem;
font-size: 1rem;

${media.tablet`
    
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  `}

`

export default CopyInput

