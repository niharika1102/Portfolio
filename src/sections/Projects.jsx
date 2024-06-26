// import React from 'react'

// function Projects() {
//   return (
//     <div>Projects</div>
//   )
// }

// export default Projects



import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: 'Chitkim Grocery Store',
      description: 'A website for grocery shopping made using HTML and CSS.',
    },
    {
      title: 'Netflix Clone',
      description: 'The landing page of Nutsla cloned, built with HTML and CSS.',
    },
    // Add more project data as needed
  ];

  return (
    <div className="bg-black text-white">
      <h2 className="text-2xl font-bold text-center pt-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;