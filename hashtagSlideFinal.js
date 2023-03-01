import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HashFrame from "./hash";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 500px;
  height: 30px;
  margin: 0 auto;
`;

export const SlideWrapper = styled.div`
  font-size: 14px;
  color: #000;
  position: relative;
  height: 100%;
  margin-top: 10px;
  white-space: nowrap;

  .swiper-slide {
    width: auto;
  }
`;

export const SlideBox = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const BtnBox = styled.div`
  position: relative;

  & button {
    background: none;
    border: none;
    color: #c1c1c1;
    z-index: 30;
    font-size: 30px;
    top: -33px;
  }
`;

export const PrevBtn = styled.button`
  width: 30px;
  height: 33px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const NextBtn = styled.button`
  width: 30px;
  height: 33px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const HashTag = () => {
  const hashData = [
    "해시태그1",
    "해시2",
    "카페모카는 언제 나와요?",
    "해시태그4",
    "해시태그5",
    "아이스 아메리카노 주세요6",
  ];

  SwiperCore.use([Navigation]);

  const [swiper, setSwiper] = useState(null);
  const [mainImgIndex, setMainImgIndex] = useState(0);

  const naviPrev = useRef(null);
  const naviNext = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: naviPrev.current,
      nextEl: naviNext.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = naviPrev.current;
      swiper.params.navigation.nextEl = naviNext.current;
      swiper.activeIndex = mainImgIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImgIndex(e.activeIndex),
    slidesPerView: "auto",
  };

  const hashST = {
    marginRight: "10px",
    padding: "5px",
  };
  return (
    <Wrapper>
      <SlideWrapper>
        <SlideBox>
          <Swiper
            {...swiperParams}
            ref={setSwiper}
            slidesPerView={"auto"}
            slidesPerGroup={3}
            loop={true}
          >
            {hashData.map((hash, index) => (
              <SwiperSlide>
                <Link to={"/a"}>
                  <HashFrame key={index} style={hashST}>
                    {hash}
                  </HashFrame>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </SlideBox>
      </SlideWrapper>
      <BtnBox>
        <PrevBtn ref={naviNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </PrevBtn>
        <NextBtn ref={naviPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </NextBtn>
      </BtnBox>
    </Wrapper>
  );
};
export default HashTag;
