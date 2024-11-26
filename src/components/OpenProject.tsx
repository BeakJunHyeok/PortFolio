import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    height: 0%;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImgBox = styled.div`
  width: 50%;
  height: 610px;
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
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 699px) {
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

const Site = styled.div``;

const OpenProject: React.FC<{ imageUrl: string; onClose: () => void }> = ({
  imageUrl,
  onClose,
}) => {
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
        <Title>Project Title</Title>
        <Contents>
          <ImgBox>
            <Img src={imageUrl} alt="Project Image" />
          </ImgBox>
          <Content>
            <Name>Project Info</Name>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              soluta nemo eos, architecto, possimus praesentium nulla
              perspiciatis dolorum, delectus doloremque temporibus vel quod a.
              Culpa labore delectus sunt ratione quam!
            </Desc>
            <Skill>Skill</Skill>
            <Date>진행기간</Date>
            <People>개발인원 </People>
            <Site>사이트</Site>
          </Content>
        </Contents>
      </Wrapper>
    </Overlay>
  );
};

export default OpenProject;
