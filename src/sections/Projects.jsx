import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../../constants';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="container py-12 px-10 sticky">
      <h2 className="text-[30px] font-title-big font-bold text-lGreen">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            projectImage={project.projectImage}
            skills={project.skills}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <NavLink
          to="https://github.com/niharika1102/"
        >
          <Button label="More Projects" />
          </NavLink>
      </div>
    </section>
  );
};

export default Projects;
