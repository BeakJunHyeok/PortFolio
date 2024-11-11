import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
  gap: 16px;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 28px;
  @media (max-width: 715px) {
    font-size: 22px;
  }
`;

const Introduce = styled(motion.h1)`
  font-size: 64px;
  height: 65px;
  margin-bottom: 20px;
  @media (max-width: 990px) {
    text-align: center;
  }
  @media (max-width: 715px) {
    font-size: 40px;
    height: 45px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
    height: 40px;
  }
`;

const Location = styled.h4`
  font-size: 22px;
  margin-bottom: 16px;
  @media (max-width: 715px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #20c997;
  padding: 16px 45px;
  border: 1px solid #20c997;
  border-radius: 30px;
  background: #777;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #20c997;
    color: #fff;
  }
`;

const ScrollIcon = styled.div`
  cursor: pointer;
  position: relative;
  bottom: 100px;
  left: 50%;
`;

const Main = () => {
  const fullText = "I'm Beak Jun Hyeok...";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isPaused) return;

    if (!isDeleting && index < fullText.length) {
      // 타이핑 중
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      // 삭제 중
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (index === fullText.length && !isDeleting) {
      // 타이핑 완료 후 일시 정지
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1000);
    } else if (index === 0 && isDeleting) {
      // 삭제 완료 후 일시 정지 및 초기화
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(false);
        setIndex(0); // 인덱스를 초기화하여 처음부터 다시 시작
      }, 1000);
    }
  }, [index, isDeleting, isPaused, fullText]);

  return (
    <Container>
      <Contents>
        <Header>Welcome</Header>
        <Introduce
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </Introduce>
        <Location>based in Hwaseong-si, Gyeonggi-do</Location>
        <Button>Hire Me</Button>
      </Contents>
      <ScrollIcon onClick={() => handleScroll("about")}>
        <FontAwesomeIcon icon={faChevronDown} size="lg" bounce />
      </ScrollIcon>
    </Container>
  );
};

export default Main;
