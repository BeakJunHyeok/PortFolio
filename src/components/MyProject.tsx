import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
const Header = styled.div`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "ABOUT";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -50%);
    font-size: 130px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
  }
`;

const MyProject = () => {
  return (
    <Wrapper>
      <Header>MyProject</Header>
    </Wrapper>
  );
};

export default MyProject;
