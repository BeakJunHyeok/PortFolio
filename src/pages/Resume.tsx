import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.main)<{ isDarkMode: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background: ${(props) => (props.isDarkMode ? "#2E2E2E " : "#fff")};
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 100%;
    padding: 10px;
  }
`;

const Header = styled(motion.h1)`
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
    color: #ddd;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
    @media (max-width: 430px) {
      font-size: 70px;
    }
  }
`;

const Contents = styled(motion.div)`
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

const Content = styled(motion.div)``;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;

const Cards = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled(motion.div)<{ isDarkMode: boolean }>`
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${(props) => (props.isDarkMode ? "#2E2E2E" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  @media (max-width: 580px) {
    padding: 15px;
  }

  &:hover {
    background: ${(props) => (props.isDarkMode ? "#3B3B55" : "#ddd")};
    color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
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

// Motion Variants
const wrapperVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.6, 1.0],
    },
  },
};

const Resume = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Wrapper
      isDarkMode={isDarkMode}
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Header variants={headerVariants}>Experience</Header>
      <Contents variants={contentVariants}>
        <Content>
          <Title>My Education</Title>
          <Cards>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2013 - 2016</Date>
              <Name>운천고등학교</Name>
              <SubName>고등학교 과정</SubName>
              <div>
                이과 과정에서 기초 과학과 수학을 집중적으로 학습하며 논리적
                사고와 문제 해결 능력을 키웠습니다.
              </div>
            </Card>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2016 - 2023</Date>
              <Name>평택대학교</Name>
              <SubName>데이터정보학과</SubName>
              <div>
                데이터정보학과에서 Python, Java, SQL, SPSS, R 등을 활용한 기초
                프로그래밍과 데이터 분석 기법을 익혔습니다.
              </div>
            </Card>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2024 - 2024</Date>
              <Name>K-Digital Training (KDT)</Name>
              <SubName>기업연계 프론트엔드 개발 수료</SubName>
              <div>
                프론트엔드 개발에 필요한 HTML, CSS, JavaScript, React 등 필수
                기술을 집중적으로 학습하며 프로젝트를 경험했습니다.
              </div>
            </Card>
          </Cards>
        </Content>
        <Content variants={contentVariants}>
          <Title>TeamProject</Title>
          <Cards>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2024 - 2024</Date>
              <Name>AliExpress</Name>
              <SubName>Frontend</SubName>
              <div>
                실제 이커머스 플랫폼을 클론코딩하며 반응형 레이아웃과 다양한 UI
                컴포넌트를 구현, 쇼핑몰 서비스 전반의 구조를 경험했습니다.
              </div>
            </Card>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2024 - 2024</Date>
              <Name>Thread</Name>
              <SubName>Frontend</SubName>
              <div>
                SNS 서비스 클론코딩을 통해 글 작성, 피드, 프로필 관리 등의
                기능을 직접 구현하며 상태 관리와 사용자 인터랙션을 학습했습니다.
              </div>
            </Card>
            <Card isDarkMode={isDarkMode} variants={cardVariants}>
              <Date>2024 - 2024</Date>
              <Name>Viva Play</Name>
              <SubName>Frontend</SubName>
              <div>
                미디어 스트리밍 플랫폼을 참고해 콘텐츠 리스트와 반응형 UI를
                구현, 애니메이션과 레이아웃 설계를 통해 몰입감 있는 사용자
                경험을 연습했습니다.
              </div>
            </Card>
          </Cards>
        </Content>
      </Contents>
    </Wrapper>
  );
};

export default Resume;
