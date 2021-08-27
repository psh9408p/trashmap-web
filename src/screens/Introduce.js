import React from "react"
import styled from "styled-components"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.windowWidth};
  height: ${(props) => props.theme.windowHeight};
`

const File = styled.img`
  /* max-width: 100%; */
  width: 100%;
  /* max-height: 500px; */
  top: 0;
  border: 2px solid ${(props) => props.theme.midGrey};
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
`

const introImg = [
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_1.jpeg",
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_2.jpeg",
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_3.jpeg",
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_4.jpeg",
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_5.jpeg",
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/Introduce/Intro_6.jpeg",
]

function Introduce() {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  }

  return (
    <Wrapper>
      <Swiper {...params}>
        {introImg.map((imgSrc, index) => (
          <File key={index} src={imgSrc} />
        ))}
      </Swiper>
    </Wrapper>
  )
}

export default Introduce
