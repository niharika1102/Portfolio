/* eslint-disable no-unused-vars */
import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-dark-500 to-dark-900 p-6 md:p-8">
      <h2 className="text-lGreen text-xl md:text-3xl font-title-big font-bold mb-6 md:mb-8">Get In Touch</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 md:space-x-4 text-white-1">
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-lGreen" />
          <span className="text-sm font-body-1 md:text-base">+91 94639 12634</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 text-white-1">
          <Mail className="w-5 h-5 md:w-6 md:h-6 text-lGreen" />
          <NavLink 
            to="mailto:niharikag1102@gmail.com" 
            className="text-sm md:text-base font-body-1"
          >
            niharikag1102@gmail.com
          </NavLink>
        </div>
      </div>
      <div className='flex space-x-4 mt-6 md:mt-8'>
        <NavLink to="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
          <Github size={32} color='#fff' />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/niharika-gupta-/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
          <Linkedin size={32} color='#fff' />
        </NavLink>
      </div>
    </section>
  );
};

export default Footer;
