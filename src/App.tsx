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
const App = () => {
  const [activeSection, setActiveSection] = useState<string>("main");
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
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
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
      </MainContent>
    </NavWrapper>
  );
};

export default App;
