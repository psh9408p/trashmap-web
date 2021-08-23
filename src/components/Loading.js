import styled, { keyframes } from "styled-components";

const Square = styled.div`
  position: absolute;
  z-index: 10000;
  border: 0;
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinKey = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: dashed 5px black;
  animation: ${spinKey} 1.5s infinite linear;
`;

function Loading() {
  return (
    <Square
      widthSize={`${window.innerWidth}px`}
      heightSize={`${window.innerHeight}px`}
    >
      <Spin />
    </Square>
  );
}

export default Loading;
