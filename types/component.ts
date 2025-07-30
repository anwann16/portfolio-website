export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  demoUrl?: string;
  codeUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
}

export interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
