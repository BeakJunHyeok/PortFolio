import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardData } from "../types";
import { motion } from "framer-motion";
import data from "../WhatIDo.json";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  @media (max-width: 990px) {
    width: 100%;
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
  @media (max-width: 430px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
  &::before {
    content: "SKILL";
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
      font-size: 120px;
    }
    @media (max-width: 430px) {
      font-size: 100px;
    }
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1200px;
  @media (max-width: 990px) {
    margin-bottom: 20px;
  }
  .slick-dots li button:before {
    color: #495057;
    margin-top: -24px;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background-color: #20c997;
    }
    @media (max-width: 1550px) {
      z-index: -9999;
    }
  }

  .slick-prev {
    left: -30px;
  }

  .slick-next {
    right: -30px;
  }
`;

const SlideGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 530px) {
    margin-top: 20px;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

const Contents = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  padding: 30px 50px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    padding: 0 10px;
  }
  @media (max-width: 430px) {
    margin-top: 0;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  gap: 14px;
  padding: 20px;
  @media (max-width: 600px) {
  }
  @media (max-width: 430px) {
    gap: 10px;
    width: 180px;
  }
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 6px;
`;

const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 4px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const Desc = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

// Motion Variants
const wrapperVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 헤더가 나타난 후 카드들이 순차적으로 나타남
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // 헤더가 끝난 후 실행
      staggerChildren: 0.3, // 카드가 순차적으로 등장
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhatIDo: React.FC = () => {
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 6) {
    chunkedData.push(data.slice(i, i + 6)); // 6개씩 분리
  }

  // Slider settings
  const settings = {
    dots: true, // 하단 점 네비게이션 활성화
    infinite: true, // 무한 스크롤
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 페이지(6개)만 표시
    slidesToScroll: 1, // 한 번에 한 페이지 이동
    arrows: true, // 화살표 활성화
  };

  return (
    <Wrapper
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Header variants={headerVariants}>What I Do</Header>
      <StyledSlider {...settings}>
        {chunkedData.map((group, index) => (
          <Contents>
            <SlideGrid key={index} variants={slideGridVariants}>
              {group.map((item) => (
                <Content key={item.id} variants={cardVariants}>
                  <Image>
                    <Img src={item.image} alt={item.name} />
                  </Image>
                  <CardDesc>
                    <Name>{item.name}</Name>
                    <Desc>{item.desc}</Desc>
                  </CardDesc>
                </Content>
              ))}
            </SlideGrid>
          </Contents>
        ))}
      </StyledSlider>
    </Wrapper>
  );
};

export default WhatIDo;
