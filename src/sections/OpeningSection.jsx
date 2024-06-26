import React from 'react';
import { profile } from '../assets/images/index';

const OpeningSection = () => {
  return (
    <div className="flex-grow bg-black-1 sticky px-16">
      <div className="container mx-auto flex flex-col py-12 px-4 xl:px-0">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
            <h1 className="mb-8 text-4xl font-bold font-title-big leading-tight lg:text-5xl xl:text-6xl">
              <span className="text-lGreen">Hi, I&#39;m Niharika,</span>
              <br />
              <span className="text-white-1">a BE CSE student</span>
            </h1>
            <p className="mb-10 text-[20px] font-body-1 font-medium leading-7 text-white-2">
              Software Developer and App Developer with strong teamwork skills. Passion for coding and innovation. Enthusiastic to learn about software development, programming languages, and emerging technologies, and regularly engaging in online courses and certifications.
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              <button className="flex items-center rounded-xl bg-purple-blue-500 px-5 py-4 text-sm font-medium text-white transition hover:bg-purple-blue-600 focus:bg-purple-blue-700">Get started now</button>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-end mt-8 lg:mt-0">
            <img className="w-4/5 rounded-2xl" src={profile} alt="Profile picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
