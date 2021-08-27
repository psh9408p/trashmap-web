import { Link } from "react-router-dom"
import styled from "styled-components"
import { closeNotice } from "../apollo"
import routes from "../routes"
import PopupClose from "./Button/PopupClose"

const BlackBack = styled.div`
  position: absolute;
  z-index: 10100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.windowWidth};
  height: ${(props) => props.theme.windowHeight};
  background-color: black;
  opacity: 50%;
`

const CustomPopup = styled.div`
  position: absolute;
  z-index: 10100;
  width: ${(props) => props.popWidth};
  height: ${(props) => props.popHeight};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: white;
  left: ${(props) => props.popLeft};
  top: ${(props) => props.popTop};
`

const PBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`

const Intro = styled.div`
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => props.theme.midGrey};
  padding: 20px;
  width: 100%;
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);
`

const Report = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  border: 1px solid rgb(232, 232, 232);

  p {
    font-weight: 600;
  }
`

const ItemOrder = styled.ol`
  list-style-type: decimal;

  li {
    margin-top: 5px;
  }
`

const ALink = styled(Link)`
  width: 100%;
`

const popWidth = 320
const popHeight = 200
const popTop = window.innerHeight / 2 - popWidth / 2 + 45
const popLeft = window.innerWidth / 2 - popWidth / 2

function Notice() {
  return (
    <>
      <BlackBack />
      <CustomPopup
        popWidth={`${popWidth}px`}
        popHeight={`${popHeight}px`}
        popTop={`${popTop}px`}
        popLeft={`${popLeft}px`}
      >
        <PBody>
          <PopupClose onClick={() => closeNotice()} custom={true} />
          <ALink to={routes.introduce}>
            <Intro onClick={() => closeNotice()}>K-트래쉬맵 소개</Intro>
          </ALink>
          <Report>
            <p>새로운 쓰레기산, 오류, 기타 제보</p>
            <ItemOrder>
              <li>ertr777@naver.com</li>
              <li>우측 하단 채널톡 문의</li>
            </ItemOrder>
          </Report>
        </PBody>
      </CustomPopup>
    </>
  )
}

export default Notice
