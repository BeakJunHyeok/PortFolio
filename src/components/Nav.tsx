import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "main", label: "Home" },
  { id: "about", label: "About" },
  { id: "whatido", label: "What I Do" },
  { id: "resume", label: "Experience" },
  { id: "project", label: "My Project" },
  { id: "contact", label: "Contact" },
];

interface NavProps {
  activeSection: string;
}

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
  top: 0;
  left: 0;

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
  margin: 0 auto 10px;
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
  inset: 0;
  margin: 0 5%;
  background-color: #20c997;
  border-radius: 8px;
  z-index: 1;
`;

const MobileOnly = styled.div`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;

const FabButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #20c997;
  color: #fff;
  font-size: 24px;
  line-height: 0;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 1002;
`;

const SheetBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1000;
`;

const Sheet = styled(motion.nav)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #111;
  color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px 14px 24px;
  z-index: 1001;
`;

const SheetHandle = styled.div`
  width: 42px;
  height: 5px;
  border-radius: 999px;
  background: #2a2a2a;
  margin: 6px auto 12px;
`;

const MobileMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

const MobileMenuButton = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 14px 12px;
  border: 1px solid ${(p) => (p.active ? "#20c997" : "#2a2a2a")};
  background: ${(p) => (p.active ? "#09342c" : "#1a1a1a")};
  color: ${(p) => (p.active ? "#20c997" : "#eaeaea")};
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: center;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Nav: React.FC<NavProps> = ({ activeSection }) => {
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
      setIsOriginalImage((p) => !p);
    }, 1000);
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sheetVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 240, damping: 28 },
    },
    exit: { y: "100%", transition: { duration: 0.2 } },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  };

  return (
    <>
      <Container>
        <Header>
          <ProfillImg
            src={isOriginalImage ? originalImage : changeImage}
            rotate={isRotating}
            onClick={handleRotate}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isRotating ? 720 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            alt="profile"
          />
          Baek Jun Hyeok
        </Header>

        <Navbar>
          {/* <BackgroundHighlight
            layout
            initial={false}
            animate={{
              top: `${(hoverIndex !== null ? hoverIndex : activeIndex) * 50}px`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          /> */}
          {menuItems.map((menu, index) => (
            <NavItem
              key={menu.id}
              isActive={activeSection === menu.id}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => scrollTo(menu.id)}
            >
              {activeSection === menu.id && (
                <BackgroundHighlight layoutId="navHighlight" />
              )}
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

      <MobileOnly>
        <FabButton
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((p) => !p)}
        >
          {open ? "✕" : "☰"}
        </FabButton>

        <AnimatePresence>
          {open && (
            <>
              <SheetBackdrop
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <Sheet
                role="dialog"
                aria-modal="true"
                aria-label="모바일 내비게이션"
                variants={sheetVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SheetHandle />
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MobileMenuGrid>
                    {menuItems.map((menu) => (
                      <motion.div key={menu.id} variants={itemVariants}>
                        <MobileMenuButton
                          active={activeSection === menu.id}
                          onClick={() => {
                            scrollTo(menu.id);
                            setOpen(false);
                          }}
                        >
                          {menu.label}
                        </MobileMenuButton>
                      </motion.div>
                    ))}
                  </MobileMenuGrid>
                </motion.div>
              </Sheet>
            </>
          )}
        </AnimatePresence>
      </MobileOnly>
    </>
  );
};

export default Nav;
