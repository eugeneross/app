import styled from 'styled-components'

const Names = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  width: 100%;
  &:after {
    content: ' ';
    background-image: linear-gradient(90deg, transparent 10%, white 90%);
    height: 100%;
    width: 50px;
    top: 0;
    right: 0;
    position: absolute;
  }
`

export default Names
