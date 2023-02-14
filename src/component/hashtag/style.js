import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 30px;
  margin: 0 auto;
`;

export const SlideWrapper = styled.div`
  font-size: 14px;
  color: #000;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 10px;
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
