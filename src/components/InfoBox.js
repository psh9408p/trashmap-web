import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InfoBoxS = styled.div`
  position: absolute;
  width: 500px;
  top: 80px;
  z-index: 10000;
  left: 20px;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  display: flex;

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
`;

const TitleBox = styled.div`
  width: auto;
  font-size: 1.3rem;
  font-weight: 900;
  margin-right: 12px;
`;

const Border = styled.div`
  width: 1px;
  opacity: 0.2;
  height: 80%;
  background: rgb(112, 112, 112);
`;

const InfoBox = () => {
  return (
    <InfoBoxS>
      <TitleBox>트래쉬맵</TitleBox>
      <Border></Border>
      <div style={{ marginLeft: "auto" }}>
        <div></div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
    </InfoBoxS>
  );
};

export default InfoBox;
