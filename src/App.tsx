import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import styled from "styled-components";
import Main from "./pages/Main";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { faArrowUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
 @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
body {
    font-family: 'Pretendard', sans-serif;
    background: ${(props) => (props.isDarkMode ? "#121212" : "#ffffff")};  
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#121212")}; 
    transition: background-color 0.3s, color 0.3s; 
  }
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section = styled.section.attrs({ className: "app-section" })``;

const MainContent = styled.main<{ isDarkMode: boolean }>`
  width: calc(100% - 260px);
  margin-left: 260px;
  overflow-x: hidden;
  background-color: ${(props) => (props.isDarkMode ? "#121212" : "#ffffff")};

  @media (max-width: 990px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ScrollToTopButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  background-color: #20c997;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.25s;
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  pointer-events: ${(p) => (p.isVisible ? "auto" : "none")};
  z-index: 1003;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 990px) {
    right: calc(env(safe-area-inset-right, 0) + 16px);
    bottom: calc(env(safe-area-inset-bottom, 0) + 16px + 48px + 10px);

    width: 48px;
    height: 48px;
    font-size: 17px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);

    animation: gentle-float 2.2s ease-in-out infinite alternate;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @keyframes gentle-float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
`;

const ModeToggleButton = styled.button<{
  isDarkMode: boolean;
  isVisible: boolean;
}>`
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  font-size: 36px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  background: transparent;
  transition: color 0.3s, opacity 0.3s;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  z-index: 3;

  &:hover {
    opacity: 0.7;
  }
`;

const App = () => {
  const [activeSection, setActiveSection] = useState<string>("main");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".app-section")
    );

    const chooseActive = () => {
      const viewportAnchor = window.innerHeight * 0.33;
      let candidateId = sections[0]?.id || "main";
      let bestDelta = Number.POSITIVE_INFINITY;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const delta = Math.abs(rect.top - viewportAnchor);
          if (delta < bestDelta) {
            bestDelta = delta;
            candidateId = sec.id;
          }
        }
      });

      setActiveSection(candidateId);
      setShowScrollButton(candidateId !== "main");
    };

    chooseActive();
    window.addEventListener("scroll", chooseActive, { passive: true });
    window.addEventListener("resize", chooseActive);
    return () => {
      window.removeEventListener("scroll", chooseActive);
      window.removeEventListener("resize", chooseActive);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <NavWrapper>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Nav activeSection={activeSection} />
      <MainContent isDarkMode={isDarkMode}>
        <Section id="main">
          <Main />
        </Section>
        <Section id="about">
          <About isDarkMode={isDarkMode} />
        </Section>
        <Section id="whatido">
          <WhatIDo isDarkMode={isDarkMode} />
        </Section>
        <Section id="resume">
          <Resume isDarkMode={isDarkMode} />
        </Section>
        <Section id="project">
          <Project />
        </Section>
        <Section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </Section>
        <ScrollToTopButton isVisible={showScrollButton} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollToTopButton>
        <ModeToggleButton
          onClick={toggleDarkMode}
          isDarkMode={isDarkMode}
          isVisible={showScrollButton}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ModeToggleButton>
      </MainContent>
    </NavWrapper>
  );
};

export default App;
