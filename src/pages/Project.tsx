import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import OpenProject from "../components/OpenProject";
import projectsData from "../project.json";
import { ProjectType } from "../types";

const Wrapper = styled.main`
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  gap: 20px;
`;

const Header = styled.h1`
  margin: 60px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "MyProject";
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    font-size: 110px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
    @media (max-width: 430px) {
      font-size: 70px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 430px) {
    margin-bottom: 0;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  font-size: 18px;
  font-weight: bold;
  border: none;
  background: none;
  color: ${(props) => (props.active ? "#28a745" : "#6c757d")};
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #28a745" : "none")};
  transition: all 0.3s;
  &:hover {
    color: #28a745;
  }
`;

const GridContainer = styled.div`
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px 20px;
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

const ProjectItem = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  object-fit: contain;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;

// 애니메이션 정의
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const projectsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// const projectsData = [
//   { id: 1, category: "HTML5", imageUrl: "/img/dd.jpg" },
//   { id: 2, category: "JavaScript", imageUrl: "/img/dd.jpg" },
//   { id: 3, category: "React", imageUrl: "/img/image.png" },
//   { id: 4, category: "HTML5", imageUrl: "/img/dd.jpg" },
//   { id: 5, category: "JavaScript", imageUrl: "/img/꼬북이.jfif" },
//   { id: 6, category: "React", imageUrl: "/img/파이리.jfif" },
//   { id: 7, category: "React", imageUrl: "/img/dd.jpg" },
// ];

// Framer Motion Variants
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project: ProjectType) => project.category === selectedCategory
        );

  return (
    <Wrapper
      as={motion.main}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Header
        as={motion.h1}
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        MY Project
      </Header>
      <FilterContainer>
        {["All", "HTML5", "JavaScript", "React"].map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      <GridContainer
        as={motion.div}
        variants={projectsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project: ProjectType) => (
            <ProjectItem
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              onClick={() => setSelectedProject(project)} // 클릭 시 모달 열기
            >
              <ProjectImage src={project.imageUrl} alt={project.category} />
            </ProjectItem>
          ))}
        </AnimatePresence>
      </GridContainer>
      {selectedProject && (
        <OpenProject
          imageUrl={selectedProject.imageUrl}
          projectData={selectedProject}
          onClose={() => setSelectedProject(null)} // 모달 닫기
        />
      )}
    </Wrapper>
  );
};

export default Project;
