/*global naver*/
import React, { useEffect } from "react";
import styled from "styled-components";
// import $ from "jquery"
import InfoBox from "../components/InfoBox";
import Current from "../components/Current";

const Map = styled.div`
  padding: 0px !important;
  width: 100vw;
`;

// 연습용 위치
const cityhall = new naver.maps.LatLng(37.5666805, 126.9784147);
const nowon = new naver.maps.LatLng(37.65993858162937, 127.06464933711598);

const positionArray = [cityhall, nowon];

// 버튼 이동 예시 지점
const seoul = new naver.maps.LatLngBounds(
  new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
  new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
);

// 지도 초기 생성 옵션
const mapOptions = {
  center: cityhall,
  zoom: 10,
  scaleControl: true,
  logoControl: true,
  mapDataControl: true,
  mapTypeControl: true,
  zoomControl: false,
};

let map; // 지도 넣을 곳
let marker;
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
      ].join("");

      // 마커 생성부
      var marker = new naver.maps.Marker({
        map: map,
        position,
      });

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
      });

      // 마커에 이벤트 등록
      naver.maps.Event.addListener(marker, "click", function (e) {
        // console.log(infowindow, infowindow.getMap())
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });
    });
  };

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const latlng = new naver.maps.LatLng(latitude, longitude);

        map.setCenter(latlng); // 얻은 좌표를 지도의 중심으로 설정합니다.
        map.setZoom(18);
        marker = new naver.maps.Marker({
          map: map,
          position: latlng,
        });
      });
    } else {
      /* 위치정보 사용 불가능 */
      alert("nono");
    }
  };

  useEffect(() => {
    map = new naver.maps.Map("map", mapOptions); // 지도 생성
    const mapSize = new naver.maps.Size(
      window.innerWidth,
      window.innerHeight - 49
    );
    map.setSize(mapSize);
    createMarker(positionArray); // 마커 생성
  }, []);

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

      <InfoBox />
      <Current getCurrentPosition={getCurrentPosition} />
    </div>
  );
};

export default Test;
