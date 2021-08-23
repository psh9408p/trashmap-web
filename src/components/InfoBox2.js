import React from "react";
import styled from "styled-components";

const InfoBoxS = styled.div`
  position: absolute;
  width: 300px;
  top: 150px;
  z-index: 10000;
  left: 20px;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
`;

const Board = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;

const InfoBox2 = () => {
  return (
    <InfoBoxS>
      <Board>
        <ul>
          <li>확진자</li>
          <li>2123</li>
        </ul>
        <ul>
          <li>완치자</li>
          <li>2,111</li>
        </ul>
        <ul>
          <li>사망자</li>
          <li>2,333</li>
        </ul>
      </Board>
    </InfoBoxS>
  );
};

export default InfoBox2;
