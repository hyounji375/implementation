import HashFrame from "./hash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { useCallback, useRef, useEffect } from "react";

export const Wrapper = styled.div`
  margin: 50px auto;
  width: 500px;
  position: relative;
  overflow: hidden;
`;

export const SlideWrapper = styled.ul`
  font-size: 14px;
  width: fit-content;
  max-width: 80%;
  white-space: nowrap;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 95%;
  position: absolute;
  top: -2px;
  left: 8px;
  justify-content: space-between;
  z-index: 100;
  font-size: 30px;
  padding: 5px;
  cursor: pointer;
`;

const HashTag = () => {
  const hashData = [
    "해시태그1",
    "해시태그",
    "캬라멜 마키아토",
    "아메리카노 먹어야지",
    "아이스 아메리카노",
    "카페모카가 좋아 마키아토가 좋아",
  ];

  const hashST = {
    margin: "0 3px",
    padding: "3px 10px",
  };

  const [scrollPos, setScrollPos] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const slideWrapper = useRef(null);

  useEffect(() => {
    setWrapperWidth(slideWrapper.current.offsetWidth);
  }, [wrapperWidth]);

  const handlePrevClick = useCallback(() => {
    if (scrollPos === 0) {
      setScrollPos(scrollPos);
    } else {
      setScrollPos((prevPos) => prevPos + 350);
    }
  }, [setScrollPos, scrollPos]);

  const handleNextClick = useCallback(() => {
    const totalWidth = slideWrapper.current.scrollWidth;
    if (wrapperWidth - scrollPos >= totalWidth) {
      setScrollPos(scrollPos);
    } else {
      setScrollPos((prevPos) => prevPos - 350);
    }
  }, [setScrollPos, scrollPos, wrapperWidth]);

  return (
    <Wrapper>
      <SlideWrapper ref={slideWrapper}>
        {hashData.map((data, index) => (
          <div
            style={{
              transform: `translateX(${scrollPos}px)`,
              transition: "all 0.5s",
            }}
          >
            <HashFrame children={data} key={index} style={hashST} />
          </div>
        ))}
      </SlideWrapper>
      <BtnBox>
        <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrevClick} />
        <FontAwesomeIcon icon={faAngleRight} onClick={handleNextClick} />
      </BtnBox>
    </Wrapper>
  );
};
export default HashTag;
