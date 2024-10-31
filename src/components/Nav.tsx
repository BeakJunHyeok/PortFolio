import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #ddd;
  color: #fff;
  width: 260px;
  height: 100vh;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

const ProfillImg = styled.img`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  flex-wrap: 1;
`;

const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: 2;
`;

const Nav = () => {
  return (
    <Container>
      <ProfillImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3DCbI2D3dd9d5foUaeITIVjicguWURtF4w&s" />
      <Navbar>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/whatido">What I Do</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Navbar>
    </Container>
  );
};

export default Nav;
