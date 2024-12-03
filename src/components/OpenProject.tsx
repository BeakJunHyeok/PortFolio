import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { OpenProjectProps } from "../types";

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

const ImgBox = styled.div`
  width: 50%;
  height: 610px;
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
  font-size: 18px;
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

const OpenProject: React.FC<OpenProjectProps> = ({
  imageUrl,
  onClose,
  projectData,
}) => {
  const {
    ProjectName,
    ProjectInfo,
    ProjectDesc,
    skill,
    date,
    people,
    siteURL,
  } = projectData;

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
            <Img src={imageUrl} alt="Project Image" />
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
