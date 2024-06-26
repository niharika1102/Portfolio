import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../../constants';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="container py-12 px-10 sticky">
      <h2 className="text-[30px] font-title-big font-bold text-lGreen mb-8">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
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
