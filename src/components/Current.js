import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const CurrentLocation = styled.div`
  position: absolute;
  bottom: 150px;
  z-index: 10000;
  right: 30px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  border-radius: 50px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
`;

const Current = ({ getCurrentPosition }) => {
  return (
    <CurrentLocation onClick={getCurrentPosition}>
      {" "}
      <FontAwesomeIcon icon={faCrosshairs} size="lg" />
    </CurrentLocation>
  );
};

export default Current;
