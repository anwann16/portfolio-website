import { Project } from "@/types/component";

export const getProjects = async (): Promise<Project[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects`, { cache: "no-store" });
  const response = await res.json();
  const projects: Project[] = await response.data;

  return projects;
};
