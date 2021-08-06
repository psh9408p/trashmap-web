import React from "react";
import styled from "styled-components";

const CurrentLocation = styled.div`
  position: absolute;
  top: 150px;
  z-index: 10000;
  left: 20px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
`;

const Current = ({ getCurrentPosition }) => {
  return (
    <CurrentLocation onClick={getCurrentPosition}>현재 위치</CurrentLocation>
  );
};

export default Current;
