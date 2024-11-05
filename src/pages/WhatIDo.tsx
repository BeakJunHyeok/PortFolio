import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
`;
const Header = styled.div`
  margin-top: 60px;
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "SKILL";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -53%);
    font-size: 120px;
    font-weight: bold;
    color: #dee3e4;
  }
`;
const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 100px 200px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 100px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 60px;
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
  gap: 4px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 16px;
  width: 360px;
`;

const WhatIDo = () => {
  return (
    <Wrapper>
      <Header>What I Do</Header>
      <Contents>
        <Content>
          <Image>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Icon"
            />
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
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFBfBskJw0CLs6VMI3jbaHUntDDMV2KAVQw&s"
              alt="Icon"
            />
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
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFBfBskJw0CLs6VMI3jbaHUntDDMV2KAVQw&s"
              alt="Icon"
            />
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
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFBfBskJw0CLs6VMI3jbaHUntDDMV2KAVQw&s"
              alt="Icon"
            />
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
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFBfBskJw0CLs6VMI3jbaHUntDDMV2KAVQw&s"
              alt="Icon"
            />
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
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFBfBskJw0CLs6VMI3jbaHUntDDMV2KAVQw&s"
              alt="Icon"
            />
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
