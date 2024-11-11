import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
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
const Content = styled.div`
  max-width: 1320px;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 990px) {
    width: 100%;
    gap: 50px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 75%;
  font-size: 16px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  @media (max-width: 990px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftHeader = styled.h4`
  font-size: 28px;
`;

const Desc = styled.p``;

const About = () => {
  return (
    <Wrapper>
      <Header>About Me</Header>
      <Content>
        <LeftContent>
          <LeftHeader>안녕하세요.</LeftHeader>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            architecto eius corporis necessitatibus obcaecati praesentium ullam
            quis. Voluptatibus id doloribus, neque officia maiores nemo
            recusandae veniam dolorum adipisci magnam numquam. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat dicta molestiae
          </Desc>
        </LeftContent>
        <RightContent>
          <div>Name : 백준혁</div>
          <div>Email : wnsgur1832@naver.com</div>
          <div>Age : 28</div>
          <div>From : 백준혁</div>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default About;
