"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { ProjectCardProps } from "@/types/component";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.boxShadow = "0 20px 40px rgba(48, 43, 99, 0.4)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.boxShadow = "0 8px 32px rgba(15, 12, 41, 0.37)";
  };

  const handleImageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, #3d3768, #2a2a4a, #1a1635)";
  };

  const handleImageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, #302b63, #24243e, #0f0c29)";
  };

  const handleTagMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    target.style.background = "rgba(48, 43, 99, 0.6)";
    target.style.borderColor = "rgba(36, 36, 62, 0.8)";
  };

  const handleTagMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    target.style.background = "rgba(48, 43, 99, 0.4)";
    target.style.borderColor = "rgba(36, 36, 62, 0.6)";
  };

  const handleDemoButtonMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    target.style.background = "linear-gradient(135deg, #3d3768, #2a2a4a)";
    target.style.boxShadow = "0 8px 25px rgba(48, 43, 99, 0.4)";
  };

  const handleDemoButtonMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    target.style.background = "linear-gradient(135deg, #302b63, #24243e)";
    target.style.boxShadow = "none";
  };

  const handleCodeButtonMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    target.style.background = "rgba(15, 12, 41, 0.8)";
    target.style.borderColor = "rgba(48, 43, 99, 0.8)";
  };

  const handleCodeButtonMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    target.style.background = "rgba(15, 12, 41, 0.5)";
    target.style.borderColor = "rgba(36, 36, 62, 0.6)";
  };

  return (
    <div
      className="
        backdrop-blur-xl border hover:border-opacity-70 transition-all duration-300
        rounded-2xl p-6 ease-out
        hover:transform hover:-translate-y-2 hover:shadow-2xl
        group cursor-pointer
      "
      style={{
        background: "rgba(36, 36, 62, 0.3)",
        borderColor: "rgba(48, 43, 99, 0.5)",
        boxShadow: "0 8px 32px rgba(15, 12, 41, 0.37)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image/Icon */}
      <div
        className="
          w-full h-48 rounded-xl mb-6 flex items-center justify-center
          transition-all duration-300 relative overflow-hidden
        "
        style={{
          background: "linear-gradient(135deg, #302b63, #24243e, #0f0c29)",
        }}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="relative z-10">
          <img
            src="/images.jpg"
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-indigo-200 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-violet-300 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Project Title */}
      <h3
        className="
        text-xl font-bold text-white mb-3
        group-hover:text-blue-200 transition-colors duration-300
      "
      >
        {project.title}
      </h3>

      {/* Project Description */}
      <p
        className="
        text-gray-300 text-sm leading-relaxed mb-6
        group-hover:text-gray-200 transition-colors duration-300
      "
      >
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="
              px-3 py-1 text-gray-200 text-xs rounded-full
              transition-all duration-200 cursor-pointer
            "
            style={{
              background: "rgba(48, 43, 99, 0.4)",
              border: "1px solid rgba(36, 36, 62, 0.6)",
            }}
            onMouseEnter={handleTagMouseEnter}
            onMouseLeave={handleTagMouseLeave}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          className="
            flex-1 text-white px-4 py-2.5 rounded-lg font-medium text-sm
            transition-all duration-200 flex items-center justify-center gap-2
            hover:transform hover:scale-101 cursor-pointer
          "
          style={{
            background: "linear-gradient(135deg, #302b63, #24243e)",
          }}
          onMouseEnter={handleDemoButtonMouseEnter}
          onMouseLeave={handleDemoButtonMouseLeave}
          onClick={() =>
            project.demoUrl && window.open(project.demoUrl, "_blank")
          }
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          Live Demo
        </button>
        <button
          className="
            text-gray-200 hover:text-white px-4 py-2.5 rounded-lg font-medium text-sm
            transition-all duration-200 flex items-center justify-center gap-2
            hover:transform hover:scale-105 cursor-pointer
          "
          style={{
            background: "rgba(15, 12, 41, 0.5)",
            border: "1px solid rgba(36, 36, 62, 0.6)",
          }}
          onMouseEnter={handleCodeButtonMouseEnter}
          onMouseLeave={handleCodeButtonMouseLeave}
          onClick={() =>
            project.codeUrl && window.open(project.codeUrl, "_blank")
          }
        >
          <FaGithub className="w-4 h-4" />
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
