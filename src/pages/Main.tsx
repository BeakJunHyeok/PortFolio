import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.main`
  background: #777;
  color: #fff;
  &::before {
    content: "";
    background: #dee3e4;
  }
  @media (max-width: 990px) {
    width: 100%;
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
  min-height: 80px;
  @media (max-width: 990px) {
    text-align: center;
  }
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
  const fullText = "I'm Beak Jun Hyeok...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200); // 느린 타이핑 속도 설정 (밀리초)

      return () => clearTimeout(timeout);
    } else {
      // 타이핑이 끝나면 1초 대기 후 초기화하여 반복
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000); // 반복 시작 전 대기 시간 설정

      return () => clearTimeout(resetTimeout);
    }
  }, [index, fullText]);

  return (
    <Container>
      <Contents>
        <Header>Welcome</Header>
        <Introduce>{displayedText}</Introduce>
        <Location>based in Hwaseong-si, Gyeonggi-do</Location>
        <Button>Hire Me</Button>
      </Contents>
    </Container>
  );
};

export default Main;
