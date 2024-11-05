import React from "react";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  width: 100%;
  font-size: 36px;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  position: relative;
  &::before {
    content: "ABOUT ME";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -53%);
    font-size: 120px;
    font-weight: bold;
    color: rgba(222, 227, 228, 0.3);
    z-index: -1;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
`;
const LeftHeader = styled.h4`
  font-size: 28px;
`;
const About = () => {
  return (
    <Container>
      <Header>About Me</Header>
      <Content>
        <LeftContent>
          <LeftHeader>안녕하세요.</LeftHeader>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            architecto eius corporis necessitatibus obcaecati praesentium ullam
            quis. Voluptatibus id doloribus, neque officia maiores nemo
            recusandae veniam dolorum adipisci magnam numquam. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat dicta molestiae
            molestias, dolores iste optio consequuntur rem ab nobis fuga ut,
            repellendus, veritatis asperiores temporibus voluptates excepturi.
            Consequuntur, ipsa voluptatum? Lorem ipsum dolor sit amet
          </div>
        </LeftContent>
        <RightContent>
          <div>Name : 백준혁</div>
          <div>Email : wnsgur1832@naver.com</div>
          <div>Age : 28</div>
          <div>From : 백준혁</div>
        </RightContent>
      </Content>
    </Container>
  );
};

export default About;
