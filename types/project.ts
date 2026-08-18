// Types
export interface Project {
  title: string;
  area: string;
  service: string;
  image?: string;
}

export interface ProjectsProps {
  projects?: Project[];
}