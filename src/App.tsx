import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import styled from "styled-components";
import Main from "./pages/Main";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Resume from "./pages/Resume";
import Project from "./components/Project";
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
const NavWrapper = styled.div``;
const Section = styled.section``;
const MainContent = styled.main`
  width: calc(100% - 260px);
  margin-left: 260px;
  @media (max-width: 990px) {
    width: 100%;
    margin-left: 0;
  }
`;
const App = () => {
  return (
    <NavWrapper>
      <GlobalStyle />
      <Nav />
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
        {/* <Section id="project">
          <Project />
        </Section>
        <Section id="contact">
          <Contact />
        </Section> */}
      </MainContent>
    </NavWrapper>
  );
};

export default App;
