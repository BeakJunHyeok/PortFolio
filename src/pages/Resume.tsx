import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
`;

const Header = styled.h1`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "Experience ";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -50%);
    font-size: 130px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
  }
`;

const Contents = styled.div``;
const Content = styled.div``;
const Title = styled.h2``;
const Cards = styled.div``;

const Card = styled.div`
  width: 550px;
  height: 200px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
`;

const Resume = () => {
  return (
    <Wrapper>
      <Header>Resume</Header>
      <Contents>
        <Content>
          <Title>My Education</Title>
          <Cards>
            <Card>
              <div>2013 - 2016</div>
              <div>운천고등학교</div>
              <div>dasdsadsaddas</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi
              </div>
            </Card>
          </Cards>
        </Content>
      </Contents>
    </Wrapper>
  );
};

export default Resume;
