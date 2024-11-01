import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import styled from "styled-components";
import Main from "./pages/Main";
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

const MainContent = styled.main`
  width: calc(100% - 260px);
  margin-left: 260px;
`;
const App = () => {
  return (
    <NavWrapper>
      <GlobalStyle />
      <Nav />
      <MainContent>
        <Outlet />
      </MainContent>
    </NavWrapper>
  );
};

export default App;
