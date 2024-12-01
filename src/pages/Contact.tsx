import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  gap: 20px;
`;

const Header = styled.h1`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "Contact";
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    font-size: 120px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
    @media (max-width: 430px) {
      font-size: 70px;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Header>Contact</Header>
    </Wrapper>
  );
};

export default Contact;
