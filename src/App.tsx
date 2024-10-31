import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import styled from "styled-components";

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

const App = () => {
  return (
    <NavWrapper>
      <GlobalStyle />
      <Nav />
      <Outlet />
    </NavWrapper>
  );
};

export default App;
