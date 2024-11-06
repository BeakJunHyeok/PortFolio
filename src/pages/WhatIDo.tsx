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
  border: 1px solid #f00;
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
  }
`;
const Contents = styled.div`
  display: grid;
  max-width: 1320px;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 30px 50px;
  @media (max-width: 990px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
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
