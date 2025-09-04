import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const ProfillImg = styled(motion.img)<{ rotate: boolean }>`
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
`;

const Navbar = styled.ul`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto 0;
  gap: 10px;
`;

const NavItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  position: relative;
  z-index: 2;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

const BackgroundHighlight = styled(motion.div)`
  position: absolute;
  height: 42px;
  width: 90%;
  background-color: #20c997;
  border-radius: 8px;
  z-index: 1;
  transition: background-color 0.3s ease;
  &:hover {
  }
`;

interface NavProps {
  activeSection: string;
}

const Icons = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Nav: React.FC<NavProps> = ({ activeSection }) => {
  const menuItems = [
    { id: "main", label: "Home" },
    { id: "about", label: "About" },
    { id: "whatido", label: "What I Do" },
    { id: "resume", label: "Experience" },
    { id: "project", label: "My Project" },
    { id: "contact", label: "Contact" },
  ];

  const activeIndex = menuItems.findIndex((menu) => menu.id === activeSection);
  const originalImage = "/img/profile.jpg";
  const changeImage = "/img/꼬북이.jfif";

  const [isRotating, setIsRotating] = useState(false);
  const [isOriginalImage, setIsOriginalImage] = useState(true);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isRotating ? 720 : 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
        Baek Jun Hyeok
      </Header>
      <Navbar>
        <BackgroundHighlight
          layout // layout 애니메이션 활성화
          initial={false}
          animate={{
            top: `${(hoverIndex !== null ? hoverIndex : activeIndex) * 50}px`,
          }}
          transition={{
            type: "spring", // 스프링 애니메이션
            stiffness: 200,
            damping: 30,
          }}
        />
        {menuItems.map((menu, index) => (
          <NavItem
            key={menu.id}
            isActive={activeSection === menu.id}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() =>
              document
                .getElementById(menu.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {menu.label}
          </NavItem>
        ))}
      </Navbar>
      <Icons>
        <motion.div whileHover={{ scale: 1.2 }}>🎈</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>🎆</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>🎇</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>🧨</motion.div>
      </Icons>
    </Container>
  );
};

export default Nav;
