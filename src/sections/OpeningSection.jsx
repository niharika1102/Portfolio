import React from 'react';

const OpeningSection = () => {
  return (
    <div className="flex-grow bg-black-1 sticky">
      <div className="container mx-auto flex flex-col py-12">
        <div className="w-full xl:mx-11 grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-5xl xl:w-11/12 xl:text-6xl">
              Take your website to the next level with Horizon UI
            </h1>
            <p className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
              Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              <button className="flex items-center rounded-xl bg-purple-blue-500 px-5 py-4 text-sm font-medium text-white transition hover:bg-purple-blue-600 focus:bg-purple-blue-700">Get started now</button>
              <button className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-dark-grey-900">
                <img className="mr-2 h-6" src="../../img/icons/phone.png" alt="phone icon" />
                Book a free call
              </button>
            </div>
          </div>
          <div className="col-span-1 hidden items-center justify-end lg:flex">
            <img className="w-4/5 rounded-2xl" src="../../img/header-1.png" alt="header image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningSection;
