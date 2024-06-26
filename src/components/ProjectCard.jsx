import React from "react";

const ProjectCard = ({ title, description }) => {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex justify-center items-center space-x-4">
          {/* Laptop Mockup */}
          <div className="w-1/2 bg-gray-300 h-64 rounded-lg"></div>
          {/* Mobile Mockup */}
          <div className="w-1/4 bg-gray-300 h-96 rounded-lg"></div>
        </div>
        <h3 className="text-white text-xl mt-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
};

export default ProjectCard;