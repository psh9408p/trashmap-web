/*global naver*/
/*global kakao*/
import { gql, useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import styled from "styled-components"
import Current from "../components/Current"
import InfoBox from "../components/InfoBox"
import Loading from "../components/Loading"
// import styled from "styled-components"
// import $ from "jquery"

const TMounts_QUERY = gql`
  query seeTMountains {
    seeTMountains {
      id
      latitude
      longtitude
      address
      amount
      image
      finish
      cleanCost
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// 버튼 이동 예시 지점
// const seoul = new naver.maps.LatLngBounds(
//   new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
//   new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
// )

// 임시 초기 쓰레기산
const tmpMountain = new naver.maps.LatLng(36.841805, 127.321792)

// 지도 초기 생성 옵션
const mapOptions = {
  center: tmpMountain,
  zoom: 10,
  scaleControl: true,
  logoControl: true,
  mapDataControl: true,
  mapTypeControl: false,
  zoomControl: false,
}

let map // 지도 넣을 곳

const Home = () => {
  const { data, loading } = useQuery(TMounts_QUERY)

  // 마커 생성 함수
  const createMarker = (tMountains) => {
    // 여러개 마커 생성 및 이벤트 등록
    tMountains.forEach((tMountain) => {
      const position = new naver.maps.LatLng(tMountain.latitude, tMountain.longtitude)

      // 정보창 html
      var contentString = [
        '<div style="width:250px;display:flex;align-items:center;flex-direction:column;padding:15px;line-height:150%;border:none;">',
        '<div style="margin-bottom:10px;max-width:220px;">',
        tMountain.image ? `<img src="${tMountain.image}" height="150" alt="쓰레기 지도" />` : null,
        "</div>",
        "<p>규모: " +
          (tMountain.amount ? `${tMountain.amount.toLocaleString("ko-KR")}톤` : `미등록`) +
          " / 소각: " +
          (tMountain.finish ? "완료" : "미완료") +
          "</p>",
        `   <p>0명이 소각을 지지합니다!</p>`,
        '   <div style="margin:20px 0 5px 0">',
        `     <a href="/tmountain/${tMountain.id}" style="border:none;padding:10px 20px;border-radius:5px;background-color:#ecf0f1;">참여하기</a>`,
        "   </div>",
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

        // maxWidth: 300,
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 2,
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

  // 현재위치 이동
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const latlng = new naver.maps.LatLng(latitude, longitude)
        map.setCenter(latlng) // 얻은 좌표를 지도의 중심으로 설정합니다.
        map.setZoom(18)
        new naver.maps.Marker({
          map: map,
          position: latlng,
          icon: {
            content:
              '<img class="pulse" draggable="false" unselectable="on" src="https://myfirstmap.s3.ap-northeast-2.amazonaws.com/circle.png">',
            anchor: new naver.maps.Point(11, 11),
          },
        })
      })
    } else {
      /* 위치정보 사용 불가능 */
      alert("위치정보 사용이 불가능합니다.")
    }
  }

  // 검색 이동
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
    const mapSize = new naver.maps.Size(window.innerWidth, window.innerHeight - 49) // 해더 -49 나중에 추가
    map.setSize(mapSize)
  }, [])

  useEffect(() => {
    if (data) {
      createMarker(data?.seeTMountains) // 마커 생성
    }
  }, [data])

  return (
    <Wrapper>
      {loading && <Loading />}
      <div id="map" />
      <InfoBox SearchBtn={SearchBtn} />
      <Current getCurrentPosition={getCurrentPosition} />
    </Wrapper>
  )
}

export default Home
