import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-dark-500 to-dark-900 p-6 md:p-8">
      <h2 className="text-lGreen text-xl md:text-3xl font-title-big font-bold mb-6 md:mb-8">Get In Touch</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 md:space-x-4 text-white">
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-lGreen" />
          <span className="text-sm md:text-base">+91 94639 12634</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 text-white">
          <Mail className="w-5 h-5 md:w-6 md:h-6 text-lGreen" />
          <span className="text-sm md:text-base">niharikag1102@gmail.com</span>
        </div>
      </div>
      <div className="flex space-x-4 mt-6 md:mt-8">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-white transition duration-300 ease-in-out hover:text-lGreen" />
        </a>
        <a href="https://github.com/niharika1102" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 md:w-8 md:h-8 text-white transition duration-300 ease-in-out hover:text-lGreen" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
