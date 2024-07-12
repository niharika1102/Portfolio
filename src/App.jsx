import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './layout.css';
import Header from "./sections/Header";
import OpeningSection from "./sections/OpeningSection";
import Projects from "./sections/Projects";
import ToolsAndTechnologies from "./sections/ToolsAndTechnology";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <Router>
      <main className="relative layout">
        <Header/>
        <section id="home" className="xl:padding-l wide:padding-b padding-r">
          <OpeningSection/>
        </section>
        <section id="projects" className="padding">
          <Projects/>
        </section>
        <section id="toolsAndTechnologies" className="padding">
          <ToolsAndTechnologies/>
        </section>
        <section id="about-me" className="padding-x py-10">
          <AboutMe/>
        </section>
        <section id="contact" className="padding-x padding-t bg-black pb-8">
          <Footer/>
        </section>
      </main>
    </Router>
  )
}