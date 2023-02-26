import styled from "styled-components";

export const Frame = styled.div`
  height: 30px;
  text-align: center;
  background: #eeedf1;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;

  & p {
    color: #643abc;
    line-height: 30px;
  }

  & span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
`;
