/* eslint-disable no-unused-vars */
import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { linkedin, github, phone, mail } from "../assets/icons";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-dark-500 to-dark-900 p-6 md:p-8">
      <h2 className="text-lGreen text-xl md:text-3xl font-title-big font-bold mb-6 md:mb-8">Get In Touch</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 md:space-x-4 text-white-1">
          <img 
            src={phone} 
            alt="Phone"
            width={32}
            height={32}
          />
          <span className="text-sm font-body-1 md:text-base">+91 94639 12634</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 text-white-1">
          {/* <Mail className="w-5 h-5 md:w-6 md:h-6 text-lGreen" /> */}
          <img 
            src={mail} 
            alt="Mail"
            width={32}
            height={32}
          />
          <a
            href="mailto:niharikag1102@gmail.com" 
            className="text-sm md:text-base font-body-1"
          >
            niharikag1102@gmail.com
          </a>
        </div>
      </div>
      <div className='flex space-x-4 mt-6 md:mt-8'>
        <a href="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
          <img 
            src={github} 
            alt="Github"
            width={32}
            height={32}
          />
        </a>
        <a href="https://www.linkedin.com/in/niharika-gupta-/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
        <img 
          src={linkedin} 
          alt="Linkedin"
          width={32}
          height={32}
        />
        </a>
      </div>
    </section>
  );
};

export default Footer;
