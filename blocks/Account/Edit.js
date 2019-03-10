import styled from 'styled-components'
import { media } from '../../utils/breakpoints';
import { cubic } from '../../utils/mixins';


const Edit = styled.div`
display: flex;
transition: ${cubic('.3s')};
cursor: pointer;

&:hover{
  transform: translateY(-1px);
}
`

export default Edit