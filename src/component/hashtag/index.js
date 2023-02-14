import { useRef, useState } from "react";
import {
  Wrapper,
  SlideWrapper,
  SlideBox,
  BtnBox,
  PrevBtn,
  NextBtn,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HashFrame from "./hash";

const HashTag = () => {
  const hashData = [
    "해시태그1",
    "해시태그2",
    "해시태그3",
    "해시태그4",
    "해시태그5",
    "해시태그6",
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
  };
  return (
    <Wrapper>
      <SlideWrapper>
        <SlideBox>
          <Swiper {...swiperParams} ref={setSwiper} slidesPerView={4}>
            {hashData.map((hash, index) => (
              <SwiperSlide>
                <HashFrame key={index}>{hash}</HashFrame>
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
