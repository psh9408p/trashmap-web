/*global naver*/
import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import $ from "jquery"
import InfoBox from "../components/SearchBox"
import InfoBox2 from "../components/FreeBoard"

import Current from "../components/Current"
import "./App.css"

const { kakao } = window
const Map = styled.div`
  padding: 0px !important;
  width: 100vw;
`

// 연습용 위치
const cityhall = new naver.maps.LatLng(37.5666805, 126.9784147)
const nowon = new naver.maps.LatLng(37.65993858162937, 127.06464933711598)

const positionArray = [cityhall, nowon]

// 버튼 이동 예시 지점
const seoul = new naver.maps.LatLngBounds(
  new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
  new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
)

// 지도 초기 생성 옵션
const mapOptions = {
  center: cityhall,
  zoom: 10,
  scaleControl: true,
  logoControl: true,
  mapDataControl: true,
  mapTypeControl: true,
  zoomControl: false,
}

let map // 지도 넣을 곳
let marker
const Test = () => {
  // 마커 생성 함수
  const createMarker = (positions) => {
    // 여러개 마커 생성 및 이벤트 등록
    positions.forEach((position) => {
      // 정보창 html
      var contentString = [
        "<div>",
        "   <h3>서울 쓰레기산</h3>",
        '   <img src="img/trashmount.jpeg" width="150" height="150" alt="쓰레기 지도" class="thumb" />',
        "   <p>주소 : 서울특별시 중구 태평로1가 31</p>",
        '   <a href="http://www.seoul.go.kr" target="_blank">자세히 보기</a>',
        "</div>",
      ].join("")

      // 마커 생성부
      var marker = new naver.maps.Marker({
        map: map,
        position,
      })

      // 정보창 생성부
      var infowindow = new naver.maps.InfoWindow({
        content: contentString,

        maxWidth: 300,
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 1,
        anchorSize: new naver.maps.Size(0, 0),
        // anchorSkew: true,
        // anchorColor: "white",

        pixelOffset: new naver.maps.Point(0, -10),
      })

      // 마커에 이벤트 등록
      naver.maps.Event.addListener(marker, "click", function (e) {
        // console.log(infowindow, infowindow.getMap())
        if (infowindow.getMap()) {
          infowindow.close()
        } else {
          infowindow.open(map, marker)
        }
      })
    })
  }

  const [onPosition, setOnPosition] = useState(false)

  const switchPos = () => {
    if (!onPosition) {
      setOnPosition(true)
    } else {
      setOnPosition(false)
    }
  }

  const getCurrentPosition = () => {
    switchPos()

    if (navigator.geolocation && !onPosition) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const latlng = new naver.maps.LatLng(latitude, longitude)
        // map.setCenter(latlng); // 얻은 좌표를 지도의 중심으로 설정합니다.
        // map.setZoom(18);
        marker = new naver.maps.Marker({
          map: map,
          position: latlng,
          icon: {
            content:
              '<img class="puslse" draggable="false" unselectable="on" src="https://myfirstmap.s3.ap-northeast-2.amazonaws.com/circle.png">',
            anchor: new naver.maps.Point(11, 11),
          },
        })
        map.setZoom(14, false)
        map.panTo(latlng)
      })
    } else {
      /* 위치정보 사용 불가능 */
      // alert("위치 정보가 없습니다.");
      marker.setMap(null)
    }
  }

  // 엔터
  let ps = new kakao.maps.services.Places()

  const SearchBtn = (e) => {
    if (e.keyCode === 13) {
      let content = e.target.value
      ps.keywordSearch(content, placeSearchCB)
    }
  }

  const placeSearchCB = (data, status) => {
    if ((status = kakao.maps.services.Status.OK)) {
      let target = data[0]
      const lat = target.y
      const lng = target.x
      const latlng = new naver.maps.LatLng(lat, lng)
      // marker = new naver.maps.Marker({
      //   position: latlng,
      //   map: map,
      // });
      map.setZoom(14, false)
      map.panTo(latlng)
    } else {
      alert("??")
    }
  }

  useEffect(() => {
    map = new naver.maps.Map("map", mapOptions) // 지도 생성
    const mapSize = new naver.maps.Size(window.innerWidth, window.innerHeight - 49)
    map.setSize(mapSize)
    createMarker(positionArray) // 마커 생성
  }, [])

  return (
    <div>
      <Map id="map" />
      {/* <button
        onClick={() => {
          map.fitBounds(seoul)
        }}
      >
        ok
      </button> */}

      <InfoBox SearchBtn={SearchBtn} />
      <InfoBox2 />

      <Current getCurrentPosition={getCurrentPosition} onPosition={onPosition} />
    </div>
  )
}

export default Test
