import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { isMobile } from "react-device-detect"

const CurrentLocation = styled.div`
  position: absolute;
  z-index: 10000;
  bottom: ${(props) => (props.isMobile ? "20px" : "30px")};
  left: ${(props) => (props.isMobile ? "10px" : "20px")};
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
  background: ${(props) => (!props.getPosition ? "white" : "#bdbdbd")};
`

const Current = ({ getCurrentPosition, getPosition }) => {
  console.log(isMobile)
  return (
    <CurrentLocation onClick={getCurrentPosition} getPosition={getPosition} isMobile={isMobile}>
      <FontAwesomeIcon icon={faCrosshairs} size="lg" />
    </CurrentLocation>
  )
}

export default Current
