import React from 'react';
import Project from '../components/Project.js';
import ProjectModal from '../components/ProjectModal.js';
import { useProjectsContext } from '../contexts/context.js';

const Projects = () => {
  const { projects, modal_open } = useProjectsContext();

  return (
    <section className="projects">
      <div className="projects__grid">
        <div className="projects__grid__1">projects</div>
        {modal_open && <ProjectModal />}
        <div className="projects__grid__2">
          {projects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
