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
body {
    font-family: 'Pretendard', sans-serif;
    background: ${(props) =>
      props.isDarkMode ? "#121212" : "#ffffff"};  /* 다크모드 배경 */
    color: ${(props) =>
      props.isDarkMode ? "#ffffff" : "#121212"}; /* 다크모드 텍스트 색상 */
    transition: background-color 0.3s, color 0.3s; /* 부드러운 전환 효과 */
  }
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section = styled.section``;
const MainContent = styled.main<{ isDarkMode: boolean }>`
  width: calc(100% - 260px);
  margin-left: 260px;
  overflow-x: hidden;
  background-color: ${(props) =>
    props.isDarkMode ? "#121212" : "#ffffff"}; /* 다크모드 배경색 */

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
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: opacity 0.3s;
  opacity: ${(props: { isVisible: boolean }) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props: { isVisible: boolean }) =>
    props.isVisible ? "auto" : "none"};

  &:hover {
    background-color: #20c997;
  }
`;

const ModeToggleButton = styled.button<{ isDarkMode: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;

  border: none;
  cursor: pointer;
  font-size: 36px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  background: transparent;
  transition: color 0.3s;
  z-index: 3;
  &:hover {
    opacity: 0.7;
  }
`;

const App = () => {
  const [activeSection, setActiveSection] = useState<string>("main");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // 다크모드 상태

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.5, // 60% 이상 보이면 활성화
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);

          // About 섹션부터 버튼 표시
          if (entry.target.id === "about") {
            setShowScrollButton(true);
          } else if (entry.target.id === "main") {
            setShowScrollButton(false);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // 다크 모드 상태 전환
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
          <Contact />
        </Section>
        <ScrollToTopButton isVisible={showScrollButton} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollToTopButton>
        <ModeToggleButton onClick={toggleDarkMode} isDarkMode={isDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ModeToggleButton>
      </MainContent>
    </NavWrapper>
  );
};

export default App;
