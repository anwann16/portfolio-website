export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
}
