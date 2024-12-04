export interface CardData {
  id: number;
  image: string;
  name: string;
  desc: string;
}

export interface ProjectType {
  id: number;
  category: string;
  imageUrl: string;
  skill: string;
  date: string;
  people: string;
  siteURL: string;
  ProjectName: string;
  ProjectInfo: string;
  ProjectDesc: string;
}

export interface OpenProjectProps {
  imageUrl: string;
  onClose: () => void;
  projectData: {
    ProjectName: string;
    ProjectInfo: string;
    ProjectDesc: string;
    skill: string;
    date: string;
    people: string;
    siteURL: string;
    images?: string[];
  };
}
