import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "PROJECT";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.4;
    transform: translate(-50%, -50%);
    font-size: 120px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  font-size: 18px;
  font-weight: bold;
  border: none;
  background: none;
  color: ${(props) => (props.active ? "#28a745" : "#6c757d")};
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #28a745" : "none")};

  &:hover {
    color: #28a745;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  grid-auto-flow: dense;

  & > div:nth-child(1) {
    grid-row: span 1;
    grid-column: span 1;
  }
  & > div:nth-child(2) {
    grid-row: span 2;
    grid-column: span 1;
  }
  & > div:nth-child(3) {
    grid-row: span 1;
    grid-column: span 1;
  }
  & > div:nth-child(4) {
    grid-row: span 2;
    grid-column: span 1;
  }
  & > div:nth-child(5) {
    grid-row: span 1;
    grid-column: span 1;
  }
  & > div:nth-child(6) {
    grid-row: span 1;
    grid-column: span 1;
  }
  & > div:nth-child(7) {
    grid-row: span 1;
    grid-column: span 1;
  }
`;

const ProjectItem = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const projectsData = [
  { id: 1, category: "Design", imageUrl: "image1.jpg" },
  { id: 2, category: "Brand", imageUrl: "image2.jpg" },
  { id: 3, category: "Photos", imageUrl: "image3.jpg" },
  { id: 4, category: "Design", imageUrl: "image4.jpg" },
  { id: 5, category: "Brand", imageUrl: "image5.jpg" },
  { id: 6, category: "Photos", imageUrl: "image6.jpg" },
  { id: 7, category: "Photos", imageUrl: "image7.jpg" },
  // 추가 이미지 데이터
];

const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <Wrapper>
      <Header>MY Project</Header>
      <FilterContainer>
        {["All", "Design", "Brand", "Photos"].map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      <GridContainer>
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.category} />
          </ProjectItem>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default Project;
