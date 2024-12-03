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

const GlobalStyle = createGlobalStyle`
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
  }
`;
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section = styled.section``;
const MainContent = styled.main`
  width: calc(100% - 260px);
  margin-left: 260px;
  overflow-x: hidden;
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

const App = () => {
  const [activeSection, setActiveSection] = useState<string>("main");
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  return (
    <NavWrapper>
      <GlobalStyle />
      <Nav activeSection={activeSection} />
      <MainContent>
        <Section id="main">
          <Main />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="whatido">
          <WhatIDo />
        </Section>
        <Section id="resume">
          <Resume />
        </Section>
        <Section id="project">
          <Project />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <ScrollToTopButton isVisible={showScrollButton} onClick={scrollToTop}>
          ^
        </ScrollToTopButton>
      </MainContent>
    </NavWrapper>
  );
};

export default App;
