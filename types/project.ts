// Types


export interface Project {
  title: string;
  service: string;
  area: string;
  image?: string | any;
}

export interface ProjectsProps {
  projects?: Project[];
}