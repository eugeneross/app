import styled from 'styled-components'

import { media } from '@utils'

const Card = styled.div`

  width: 100%;
  padding: 1.25rem;
  background: white;
  box-shadow: 0px 2px 5px rgba(14, 30, 37, 0.06);
  border-radius: .25rem;

  ${media.tablet`
    padding: 1.875rem;
  `}

`

export default Card





