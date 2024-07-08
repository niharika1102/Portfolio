/* eslint-disable no-unused-vars */
import React from 'react';
import { tools } from '../../constants';

const ToolsAndTechnologies = () => {
  return (
    <section className="py-12 px-4 md:px-10">
      <h2 className="text-[30px] font-title-big font-bold text-lGreen mb-8">Tools & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="relative group flex justify-center items-center rounded-full bg-lGreen-20 border border-lGreen mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto p-2">
            <img src={tool.src} alt={tool.alt} className="w-full h-full object-contain p-4" />
            <span className="absolute bottom-0 transform translate-y-full font-body-1 bg-dGreen text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tool.alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
