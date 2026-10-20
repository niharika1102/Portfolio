import React from "react";
import Badge from "./Badge";
import { github, globe } from "../assets/icons";

const ProjectCard = ({ title, description, githubLink, demoLink, projectImage, skills }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 rounded-xl shadow-lg">

      <div className="w-full text-white flex flex-col justify-center pl-4">
        <h3 className="text-[20px] font-body-1 pb-6">{title}</h3>
        <p className="text-[20px] text-white-48 pb-4">{description}</p>
        <div className="flex flex-wrap items-center pb-6">
          {skills.map((skill, index) => (
            <Badge key={index} text={skill} />
          ))}
        </div>
        <div className="flex items-center space-x-4 mb-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
              <img 
                src={github} 
                alt="Github"
                width={32}
                height={32}
              />  
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
              <img 
                src={globe} 
                alt="Website"
                width={32}
                height={32}
              /> 
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
