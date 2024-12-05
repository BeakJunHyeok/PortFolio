import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Adrres = styled.div`
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    color: #20c997;
  }
`;

const HeaderNav = () => {
  return (
    <Wrapper>
      <Card>
        <IconImg src="/img/Github-Dark.svg"></IconImg>
        <Adrres>https://github.com/BeakJunHyeok</Adrres>
      </Card>
    </Wrapper>
  );
};

export default HeaderNav;
