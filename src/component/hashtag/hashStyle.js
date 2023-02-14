import styled from "styled-components";

export const Frame = styled.div`
  width: 104px;
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
  line-height: 30px;
  display: flex;
  align-items: center;

  & p {
    color: #643abc;
  }
`;
