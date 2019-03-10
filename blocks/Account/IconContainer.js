import styled from 'styled-components'
import { media } from '../../utils/breakpoints';


const IconContainer = styled.div`

position: relative;
display: flex;

svg{
  transform: scale(.5);
  ${media.tablet`
    transform: scale(1);
  `}
}

`

export default IconContainer