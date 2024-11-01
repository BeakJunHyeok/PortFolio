import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
`;
const ProfillImg = styled.img`
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Navbar = styled.ul`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  gap: 30px;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Container>
      <Header>
        <ProfillImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3DCbI2D3dd9d5foUaeITIVjicguWURtF4w&s" />
        Baek Jun Hyeok
      </Header>
      <Navbar>
        <li>
          <Link to="/">Home</Link>
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
      <Icons>
        <div>🎈</div>
        <div>🎆</div>
        <div>🎇</div>
        <div>🧨</div>
      </Icons>
    </Container>
  );
};

export default Nav;
