import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardData } from "../types";
import data from "../WhatIDo.json";

const Wrapper = styled.div`
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
const Header = styled.div`
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

  .slick-dots li button:before {
    color: #495057;
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
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

const SlideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  grid-template-rows: repeat(2, auto); /* 2행 */
  gap: 20px; /* 콘텐츠 간 간격 */
  width: 100%;
  box-sizing: border-box;
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

const Content = styled.div`
  width: 100%;
  gap: 14px;
  padding: 20px;
`;

const Image = styled.div`
  background: #fff;
  width: 80px;
  height: 80px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
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
`;

const Desc = styled.p`
  font-size: 14px;
  color: #495057;
  margin: 0;
`;

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
    <Wrapper>
      <Header>What I Do</Header>
      <StyledSlider {...settings}>
        {chunkedData.map((group, index) => (
          <Contents>
            <SlideGrid key={index}>
              {group.map((item) => (
                <Content key={item.id}>
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
