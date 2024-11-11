import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 100%;
    padding: 10px;
  }
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
    top: 40%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -50%);
    font-size: 120px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
    @media (max-width: 430px) {
      font-size: 70px;
    }
  }
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

const Content = styled.div``;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 580px) {
    padding: 15px;
  }
`;

const Date = styled.p`
  background: #20c997;
  color: #fff;
  width: fit-content;
  text-align: center;
  border-radius: 6px;
  padding: 4px 8px;
  font-weight: bold;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const SubName = styled.p`
  color: #dc3545;
  font-size: 16px;
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
              <Date>2013 - 2016</Date>
              <Name>운천고등학교</Name>
              <SubName>고등학교 과정</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
            <Card>
              <Date>2016 - 2023</Date>
              <Name>평택대학교</Name>
              <SubName>데이터정보학과</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
            <Card>
              <Date>2024 - 2024</Date>
              <Name>K-Digital Training (KDT)</Name>
              <SubName>기업연계 프론트엔드 개발 수료</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
          </Cards>
        </Content>
        <Content>
          <Title>My Experience</Title>
          <Cards>
            <Card>
              <Date>2022 - 2023</Date>
              <Name>Company A</Name>
              <SubName>Frontend Developer</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
            <Card>
              <Date>2023 - 2024</Date>
              <Name>Company B</Name>
              <SubName>Intern Developer</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
            <Card>
              <Date>2024 - Present</Date>
              <Name>Company C</Name>
              <SubName>Full-Stack Developer</SubName>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                distinctio animi.
              </div>
            </Card>
          </Cards>
        </Content>
      </Contents>
    </Wrapper>
  );
};

export default Resume;
