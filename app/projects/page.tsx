import { Project } from "@/types/component";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import PageContainer from "@/components/PageContainer";
import { getProjects } from "@/lib/getProjects";

const ProjectPage = async () => {
  const projects = await getProjects();

  console.log(projects);

  return (
    <PageContainer>
      <SectionTitle>My Projects</SectionTitle>
      <div className="min-h-screen my-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectPage;
