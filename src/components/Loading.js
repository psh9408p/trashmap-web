import styled, { keyframes } from "styled-components"

const Square = styled.div`
  position: absolute;
  z-index: 10000;
  border: 0;
  /* width: 50px;
  padding: 0px; */
  /* margin-top: 90px; */
  /* margin-left: calc(50% - 40px);
  margin-left: -webkit-calc(50% - 40px);
  margin-left: -moz-calc(50% - 40px); */
`

const spinKey = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spin = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: dashed 5px black;
  animation: ${spinKey} 1.5s infinite linear;
`

function Loading() {
  return (
    <Square>
      <Spin />
    </Square>
  )
}

export default Loading
