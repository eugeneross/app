import styled from "styled-components";
import { rounded } from '../utils/mixins'
import { media } from '../utils/breakpoints'

const Card = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.25rem;
  background: white;
  box-shadow: 0px 2px 5px rgba(14, 30, 37, 0.06);
  ${rounded};

  ${media.tablet`
    padding: 3.125rem;
    
  `}

  

`

export default Card





