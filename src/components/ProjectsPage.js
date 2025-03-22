import React from "react";
import "../styles/ProjectsPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faImage } from '@fortawesome/free-solid-svg-icons';
import projects from "../data/projects";

function ProjectsPage() {
  const groupProjectsByColumns = () => {
    const columns = {
      col1: [],
      col2: [],
      col3: []
    };
    
    projects.forEach((project, index) => {
      if (index % 3 === 0) {
        columns.col1.push(project);
      } else if (index % 3 === 1) {
        columns.col2.push(project);
      } else {
        columns.col3.push(project);
      }
    });
    
    return columns;
  };
  
  const columns = groupProjectsByColumns();
  
  return (
    <div id="projects" className="bg-zinc-900 text-white scroll-mt-14 overflow-y-auto">
      <div className="container mx-auto mt-8 px-4 md:px-1 h-full">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-3xl md:text-4xl font-bold pb-4 text-center">Projects</h1>
          
          <div className="flex flex-wrap gap-4 my-4">
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)]">
              {columns.col1.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)]">
              {columns.col2.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="w-full sm:hidden lg:block lg:w-[calc(33.33%-1rem)]">
              {columns.col3.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card mb-4">
      <div className="bg-zinc-700 rounded-xl border border-zinc-800 shadow-inner shadow-zinc-800 h-auto hover:scale-105 hover:bg-zinc-600 transition-all duration-300">
        <div className="relative">
          <div className="image-container p-2">
            {project.image ? (
              <img
                className="project-image rounded-md w-full h-48 object-cover"
                src={project.image}
                alt={project.name}
              />
            ) : (
              <div className="project-image rounded-md w-full h-48 bg-zinc-800 flex items-center justify-center">
                <FontAwesomeIcon icon={faImage} size="3x" className="text-zinc-500" />
              </div>
            )}
            <h5 className="absolute text-xl md:text-2xl font-bold tracking-tight text-thin bottom-0 left-5 text-gold">{project.name}</h5>
          </div>
          <div className="px-5 pt-2">
            <p className="mb-3 font-normal text-white text-sm md:text-base">{project.description}</p>
          </div>
          <div className="p-5 pt-2">
            {project.websiteUrl && (
              <a className="me-4" href={project.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                <FontAwesomeIcon icon={faGlobe} size="lg" className="icon-gold md:text-2xl"/>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <FontAwesomeIcon icon={faGithub} size="lg" className="icon-gold md:text-2xl"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;