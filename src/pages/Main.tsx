import React from "react";
import styled from "styled-components";

const Container = styled.main`
  background: #777;
  color: #fff;
  &::before {
    content: "";
    background: #dee3e4;
  }
`;

const Contents = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  font-size: 28px;
`;

const Introduce = styled.h1`
  font-size: 64px;
`;

const Location = styled.h4`
  font-size: 22px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #20c997;
  padding: 12px 40px;
  border: 1px solid #20c997;
  border-radius: 20px;
  background: #777;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #20c997;
    color: #fff;
  }
`;

const Main = () => {
  return (
    <Container>
      <Contents>
        <Header>Welcome</Header>
        <Introduce>I'm Beak</Introduce>
        <Location>based in Hwaseong-si, Gyeonggi-do</Location>
        <Button>Hire Me</Button>
      </Contents>
    </Container>
  );
};

export default Main;
