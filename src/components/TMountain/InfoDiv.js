import { useEffect, useState } from "react"
import styled from "styled-components"
import { FatText } from "../shared"

const InforGrid = styled.div`
  display: grid;
  grid-auto-rows: 80px;

  gap: 20px 50px;
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Row = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Subtitle = styled(FatText)`
  color: #2cc4e7;
  margin-bottom: 10px;
`
const SubContent = styled.p`
  line-height: 1.5;
`

function InfoDiv({ mountain }) {
  const [cost1, setCost1] = useState()
  const [cost2, setCost2] = useState()

  const unitConversion = (value) => {
    setCost1(parseInt(value / 10000))
    setCost2(value % 10000)
  }

  const calCost = () => {
    if (mountain.cleanCost) {
      unitConversion(mountain.cleanCost)
    } else if (mountain.amount) {
      // 비용이 없으면 톤당 25만원으로 추정치 계산
      const estimateCost = mountain.amount * 25
      unitConversion(estimateCost)
    }
  }

  useEffect(() => {
    calCost()
  }, [])

  return (
    <InforGrid>
      <Row>
        <Subtitle>주소</Subtitle>
        <SubContent>{mountain?.address}</SubContent>
      </Row>
      <Row>
        <Subtitle>GPS 좌표</Subtitle>
        <SubContent>Latitude: {mountain?.latitude}</SubContent>
        <SubContent>Longtitude: {mountain?.longtitude}</SubContent>
      </Row>
      <Row>
        <Subtitle>규모</Subtitle>
        <SubContent>
          {mountain?.amount ? `${mountain?.amount?.toLocaleString("ko-KR")}톤` : "미등록"}
        </SubContent>
      </Row>
      <Row>
        <Subtitle>예상 처리 비용</Subtitle>
        <SubContent>
          {cost1 && cost1 !== 0 ? `${cost1?.toLocaleString("ko-KR")}억` : ""}{" "}
          {cost2 && cost2 !== 0 ? `${cost2?.toLocaleString("ko-KR")}만원` : ""}
          {!cost1 && !cost2 && "미등록"}
        </SubContent>
      </Row>
      <Row>
        <Subtitle>처리 여부</Subtitle>
        <SubContent>{mountain?.finish ? "완료" : "미완료"}</SubContent>
      </Row>
      <Row>
        <Subtitle>유형 (더미/매립)</Subtitle>
        <SubContent>{mountain?.dumpType}</SubContent>
      </Row>
    </InforGrid>
  )
}

export default InfoDiv
