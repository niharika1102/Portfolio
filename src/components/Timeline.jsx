/* eslint-disable no-unused-vars */
import React from "react";
import { timelineEvents } from "../../constants";

const Timeline = () => {
    return (
        <section className="py-12 px-4 md:px-10">
            <h2 className="text-lGreen text-[30px] md:text-3xl font-title-big font-bold mb-8">About Me</h2>
            <div className="relative border-l border-lGreen pl-4 ml-10">
                {timelineEvents.map((event, index) => (
                <div key={index} className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-dGreen border-2 border-lGreen rounded-full">
                    <div className="w-3 h-3 bg-lGreen rounded-full"></div>
                    </span>
                    <h3 className="text-white text-base md:text-lg font-bold mb-1">{event.date}</h3>
                    <p className="text-white-48 text-sm md:text-base">{event.description}</p>
                </div>
                ))}
            </div>
        </section>
  );
};

export default Timeline;
