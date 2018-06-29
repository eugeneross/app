import styled from 'styled-components'
import colors from '../utils/colors'
import {media} from '../utils/breakpoints'

const Value = styled.div`
  display: block;
  font-size: ${props => props.large ? '4.5rem' : '1.25rem'};
  line-height: ${props => props.large ? '1' : '1.5'};
  margin-top: ${props => props.large ? '.25rem' : '0'};
  color: ${colors.black};
  font-weight: normal;

  ${media.tablet`
    font-size: ${props => props.large ? '6rem' : '1.25rem'};
  `}

`
export default Value