import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  display: flex;
  gap: 14px;
  align-items: flex-start;
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
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
`;

const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
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

const WhatIDo = () => {
  return (
    <Wrapper>
      <Header>What I Do</Header>
      <Contents>
        <Content>
          <Image>
            <Img src="/img/figma.png" alt="Icon" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
        <Content>
          <Image>
            <Img src="/img/reacticon.png" alt="Icon" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
        <Content>
          <Image>
            <Img src="/img/jsicon.png" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
        <Content>
          <Image>
            <Img src="/img/jsicon.png" alt="Icon" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
        <Content>
          <Image>
            <Img src="/img/jsicon.png" alt="Icon" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
        <Content>
          <Image>
            <Img src="/img/jsicon.png" alt="Icon" />
          </Image>
          <CardDesc>
            <Name>Figma</Name>
            <Desc>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </Desc>
          </CardDesc>
        </Content>
      </Contents>
    </Wrapper>
  );
};

export default WhatIDo;
