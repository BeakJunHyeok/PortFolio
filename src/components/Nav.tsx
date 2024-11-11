import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(720deg);
  }
`;

const Container = styled.div`
  background: #ddd;
  color: #fff;
  width: 260px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 990px) {
    display: none;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
`;
const ProfillImg = styled.img<{ rotate: boolean }>`
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  ${(props) =>
    props.rotate &&
    css`
      animation: ${rotate} 1s linear;
    `}
`;

const Navbar = styled.ul`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  gap: 30px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Nav: React.FC = () => {
  const originalImage = "/img/파이리.jfif";
  const changeImage = "/img/꼬북이.jfif";

  const [isRotating, setIsRotating] = useState(false);
  const [isOriginalImage, setIsOriginalImage] = useState(true);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const handleRotate = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setIsOriginalImage(!isOriginalImage); // 이미지 상태를 토글
    }, 1000); // 애니메이션 시간 후에 회전 종료 및 이미지 변경
  };
  return (
    <Container>
      <Header>
        <ProfillImg
          src={isOriginalImage ? originalImage : changeImage}
          rotate={isRotating}
          onClick={handleRotate}
        />
        Baek Jun Hyeok
      </Header>
      <Navbar>
        <li onClick={() => handleScroll("main")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("whatido")}>What I Do</li>
        <li onClick={() => handleScroll("resume")}>Resume</li>
        <li onClick={() => handleScroll("project")}>My Project</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </Navbar>
      <Icons>
        <div>🎈</div>
        <div>🎆</div>
        <div>🎇</div>
        <div>🧨</div>
      </Icons>
    </Container>
  );
};

export default Nav;
