import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.main)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media (max-width: 990px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 430px) {
    height: 100%;
  }
`;

const Header = styled(motion.div)`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "ABOUT";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -50%);
    font-size: 130px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
  }
`;
const Content = styled.div`
  max-width: 1320px;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: 990px) {
    width: 100%;
    gap: 50px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 430px) {
    gap: 20px;
    padding: 0 20px;
  }
`;
const LeftContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  font-size: 16px;
  @media (max-width: 990px) {
    width: 75%;
  }
  @media (max-width: 530px) {
    width: 100%;
    text-align: center;
  }
`;

const RightContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  & > div {
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #eaeaea;
  }
  @media (max-width: 990px) {
    width: 75%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 430px) {
    gap: 10px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
const LeftHeader = styled.h4`
  font-size: 28px;
`;

const Desc = styled.p`
  line-height: 2;
  @media (max-width: 430px) {
    line-height: 1.4;
    width: 100%;
    text-align: center;
  }
`;

// Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 자식 요소가 0.3초 간격으로 등장
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const leftContentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const rightContentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <Wrapper
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Header variants={itemVariants}>About Me</Header>
      <Content>
        <LeftContent variants={leftContentVariants}>
          <LeftHeader>안녕하세요.</LeftHeader>
          <Desc>
            저는 끊임없이 배우며 성장하는 프론트엔드 개발자입니다. 사용자 경험을
            중시하고, 직관적이고 세련된 인터페이스 구현에 열정을 갖고 있습니다.
            변화하는 기술에 발맞춰 도전하며, 창의적이고 집요한 노력으로 문제를
            해결해 나가고자 합니다. 앞으로도 더 나은 코드를 작성하며 성장해
            나가겠습니다.
          </Desc>
        </LeftContent>
        <RightContent variants={rightContentVariants}>
          <div>
            <b>Name</b> : 백준혁
          </div>
          <div>
            <b>Email</b> : wnsgur1832@naver.com
          </div>
          <div>
            <b>Age</b> : 28
          </div>
          <div>
            <b>From</b> : Hwaseong-si
          </div>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default About;
