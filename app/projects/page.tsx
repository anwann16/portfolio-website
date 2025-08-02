import { Project } from "@/types/component";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import PageContainer from "@/components/PageContainer";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const projects = await res.json();

  return (
    <PageContainer>
      <SectionTitle>My Projects</SectionTitle>
      <div className="min-h-screen my-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projects.data.map((project: Project, index: number) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectPage;
