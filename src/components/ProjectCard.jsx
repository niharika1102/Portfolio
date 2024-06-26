import React from "react";
import { laptop } from "../assets/images";
import { Github, Globe } from "lucide-react";

const ProjectCard = ({ title, description, githubLink, demoLink, projectImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 rounded-xl shadow-lg">
      <div className="relative flex-shrink-0 w-full md:w-1/2 mt-6 md:mt-0">
        <img
          src={laptop}
          alt="Laptop Graphic"
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={projectImage}
            alt={title}
            className="w-full h-full object-contain"
            style={{ clipPath: 'polygon(13% 17%, 87% 17%, 87% 83%, 13% 83%)' }}
          />
        </div>
      </div>
      <div className="md:ml-8 w-full md:w-1/2 text-white flex flex-col justify-center">
        <h3 className="text-[20px] font-body-1 pb-6">{title}</h3>
        <p className="text-[20px] text-white-48 mb-4 pb-8">{description}</p>
        <div className="flex items-center space-x-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
              <Github />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
              <Globe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
