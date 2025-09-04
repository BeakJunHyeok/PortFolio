import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.main)<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background: ${(props) => (props.isDarkMode ? "#2E2E2E " : "#fff")};
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
    color: #ddd;
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
  font-weight: normal;
  color: gray;
  & > div > b {
    color: #20c997;
  }

  @media (max-width: 990px) {
    width: 75%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  font-family: Arial, Helvetica, sans-serif;
`;

const Desc = styled.p`
  line-height: 2;
  color: gray;
  font-size: 17px;
  & > b {
    font-weight: bold;
  }
  @media (max-width: 430px) {
    line-height: 1.4;
    width: 100%;
    text-align: center;
  }
`;
const shake = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1deg); /* 미세하게 흔들림 */
  }
  50% {
    transform: rotate(-1deg); /* 반대 방향으로 미세하게 흔들림 */
  }
  75% {
    transform: rotate(0.5deg); /* 마지막 흔들림 */
  }
`;

const CardContainer = styled.div<CardContainerProps>`
  perspective: 1000px;
  width: 320px;
  height: 400px;
  cursor: pointer;
  border-radius: 10px;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.6s ease-in-out; /* 회전 애니메이션 복구 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* 클릭 시 카드 회전 */
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Card = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* 뒷면이 보이지 않도록 설정 */
  border-radius: 10px;
  overflow: hidden;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    animation: ${shake} 1s ease-in-out;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardBack = styled.div`
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #20c997;
  border-radius: 10px;
  transform: rotateY(180deg); /* 뒷면을 180도 회전 */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 20px;
  gap: 10px;

  & > div > b {
    color: #fff;
  }
  & > div {
    padding-top: 12px;
    padding-bottom: 12px;
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

interface CardContainerProps {
  isFlipped: boolean;
}

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Wrapper
      isDarkMode={isDarkMode}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Header variants={itemVariants}>About Me</Header>
      <Content>
        <LeftContent variants={leftContentVariants}>
          <LeftHeader>안녕하세요!</LeftHeader>
          <Desc>
            저는 끊임없이 배우며 성장하고 싶은
            <b> 프론트엔드 개발자 백준혁</b>입니다.
            <br />
            사용자가 편리하게 느낄 수 있는 직관적인 인터페이스를 만들고, 작은
            부분에서도 만족감을 줄 수 있는 경험을 고민하는 걸 좋아합니다. 아직
            배울 게 많다고 생각하기 때문에 새로운 기술을 접하면 직접 해보면서
            익히고, 부족한 부분은 꾸준히 채워나가고 있습니다. 단순히 기능을
            구현하는 데 그치지 않고 더 나은 방법이 없는지 끊임없이 고민하며,
            문제를 끝까지 해결해내는 집요함으로 성장하고 싶습니다. 앞으로도
            배우는 과정을 즐기며 더 좋은 코드를 작성하고, 성장하는 개발자가
            되겠습니다.
          </Desc>
        </LeftContent>
        <RightContent variants={rightContentVariants}>
          <CardContainer
            isFlipped={isFlipped}
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <Card>
              <CardFront>
                <img src="/img/profile.jpg" alt="Profile" />
              </CardFront>
              <CardBack>
                <div>
                  <b>Name</b> : 백준혁
                </div>
                <div>
                  <b>Email</b> : wnsgur1832@naver.com
                </div>
                <div>
                  <b>Age</b> : 1997 . 05 . 15 (29)
                </div>
                <div>
                  <b>From</b> : Hwaseong-si
                </div>
              </CardBack>
            </Card>
          </CardContainer>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default About;
