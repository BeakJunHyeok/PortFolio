import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { OpenProjectProps } from "../types";
import Slider from "react-slick";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
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
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1001;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

  @media (max-width: 699px) {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 430px) {
    width: 90%;
    height: 96%;
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
  line-height: 1;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.2px;
  @media (max-width: 430px) {
    font-size: 22px;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 28px;

  @media (max-width: 699px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 430px) {
    gap: 16px;
  }
`;

/* --- 이미지 영역 --- */
const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #0b0c0e;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  @media (max-width: 699px) {
    width: 100%;
    height: 320px;
  }
  @media (max-width: 430px) {
    height: 240px;
  }

  /* 슬라이드 하단 도트 살짝 올리기 */
  .slick-dots {
    bottom: -2px;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-dots li button:before {
    color: #adb5bd;
    font-size: 10px;
    opacity: 0.6;
    transition: all 0.2s ease;
  }

  .slick-dots li.slick-active button:before {
    color: #20c997;
    opacity: 1;
  }
`;

const SlideFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* 꽉 차게 보이도록 */
  border-radius: 12px;
  display: block;
`;

/* 이미지 위 오버레이 */
const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.15));
  opacity: 0;
  display: grid;
  place-items: center;
  padding: 16px;
  transition: opacity 0.25s ease;

  /* Hover 시 나타남 */
  ${SlideFrame}:hover & {
    opacity: 1;
  }
`;

const OverlayInner = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ViewSiteBtn = styled.a`
  padding: 10px 16px;
  background: #20c997;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  box-shadow: 0 8px 20px rgba(32, 201, 151, 0.35);

  &:hover {
    transform: translateY(-1px);
    background: #18b48a;
    box-shadow: 0 12px 26px rgba(32, 201, 151, 0.45);
  }
`;

const Caption = styled.span`
  color: #e9ecef;
  font-size: 13px;
  opacity: 0.95;
`;

/* --- 텍스트 콘텐츠 --- */
const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 699px) {
    width: 100%;
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
    gap: 14px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 699px) {
    font-size: 18px;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.7;
  color: #343a40;

  @media (max-width: 699px) {
    font-size: 14px;
  }
`;

const Meta = styled.div`
  display: grid;
  gap: 14px;
  color: #495057;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: baseline;
`;

const MetaKey = styled.span`
  min-width: 64px;
  color: #868e96;
`;

const Site = styled.a`
  transition: color 0.2s;
  word-break: break-all;
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
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: false,
  } as const;

  useEffect(() => {
    const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
    setImageList(validImages);
  }, [images]);

  return (
    <Overlay onClick={onClose}>
      <Wrapper
        onClick={(e) => e.stopPropagation()} // 배경 클릭 닫힘 방지
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.28 }}
      >
        <CloseButton onClick={onClose} aria-label="close">
          ×
        </CloseButton>
        <Title>{ProjectName}</Title>

        <Contents>
          {/* 이미지 영역 */}
          <ImgBox>
            <StyledSlider {...settings}>
              {imageList.map((image, index) => (
                <SlideFrame key={index}>
                  <Img src={image} alt={`Project Image ${index + 1}`} />
                  <ImgOverlay>
                    <OverlayInner>
                      {siteURL && (
                        <ViewSiteBtn
                          href={siteURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          사이트 보러가기
                        </ViewSiteBtn>
                      )}
                      <Caption>
                        {index + 1} / {imageList.length}
                      </Caption>
                    </OverlayInner>
                  </ImgOverlay>
                </SlideFrame>
              ))}
            </StyledSlider>
          </ImgBox>

          {/* 텍스트 영역 */}
          <Content>
            <Name>{ProjectInfo}</Name>
            <Desc>{ProjectDesc}</Desc>

            <Meta>
              <MetaRow>
                <MetaKey>📚 Skills</MetaKey>
                <span>{skill || "N/A"}</span>
              </MetaRow>
              <MetaRow>
                <MetaKey>📅 기간</MetaKey>
                <span>{date || "N/A"}</span>
              </MetaRow>
              <MetaRow>
                <MetaKey>👥 팀원</MetaKey>
                <span>{people || "N/A"}</span>
              </MetaRow>
              {siteURL && (
                <MetaRow>
                  <MetaKey>🌐 사이트</MetaKey>
                  <Site
                    href={siteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteURL}
                  </Site>
                </MetaRow>
              )}
            </Meta>
          </Content>
        </Contents>
      </Wrapper>
    </Overlay>
  );
};

export default OpenProject;
