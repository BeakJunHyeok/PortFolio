import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { OpenProjectProps } from "../types";
import Slider from "react-slick";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Wrapper = styled(motion.div)`
  width: 80%;
  max-width: 1100px;
  height: 80%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1001;
  @media (max-width: 699px) {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 430px) {
    width: 90%;
    gap: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: #000;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 430px) {
    font-size: 28px;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 40px;
  @media (max-width: 699px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1200px;
  cursor: pointer;
  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    color: #495057;
    font-size: 12px;
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .slick-dots li.slick-active button:before {
    color: #20c997;
    opacity: 1;
  }

  .slick-dots li button:before:hover {
    color: #ff6347;
    opacity: 1;
  }

  .slick-dots li {
    margin: 0 8px;
  }

  @media (max-width: 990px) {
    margin-bottom: 20px;
  }
`;

const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  @media (max-width: 699px) {
    height: 320px;
    width: 100%;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 240px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  @media (max-width: 699px) {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 699px) {
    width: 100%;
    gap: 20px;
    font-size: 14px;
  }
  @media (max-width: 430px) {
    display: flex;
    width: 100%;
    gap: 16px;
    font-size: 12px;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 699px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-weight: normal;

  @media (max-width: 699px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const Skill = styled.div``;

const Date = styled.div``;

const People = styled.div``;

const Site = styled.a`
  transition: all 0.3s;
  &:hover {
    color: #20c997;
  }
`;

const OpenProject: React.FC<OpenProjectProps> = ({ onClose, projectData }) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const {
    ProjectName,
    ProjectInfo,
    ProjectDesc,
    skill,
    date,
    people,
    siteURL,
    images,
  } = projectData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
    setImageList(validImages);
  }, [images]);

  return (
    <Overlay onClick={onClose}>
      <Wrapper
        onClick={(e) => e.stopPropagation()} // 클릭 이벤트가 배경에 전달되지 않도록 방지
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{ProjectName}</Title>
        <Contents>
          <ImgBox>
            <StyledSlider {...settings}>
              {imageList.map((image, index) => (
                <Img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                />
              ))}
            </StyledSlider>
          </ImgBox>
          <Content>
            <Name>{ProjectInfo}</Name>
            <Desc>{ProjectDesc}</Desc>
            <Skill>📚 Skills : {skill || "N/A"}</Skill>
            <Date>📅 기간 : {date || "N/A"}</Date>
            <People>👥 팀원 : {people || "N/A"}</People>
            <Site href={siteURL} target="_blank" rel="noopener noreferrer">
              🌐 {siteURL || "사이트 없음"}
            </Site>
          </Content>
        </Contents>
      </Wrapper>
    </Overlay>
  );
};

export default OpenProject;
