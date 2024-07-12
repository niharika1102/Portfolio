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
        <section id="home">
          <OpeningSection/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="toolsAndTechnologies">
          <ToolsAndTechnologies/>
        </section>
        <section id="about-me">
          <AboutMe/>
        </section>
        <section id="contact">
          <Footer/>
        </section>
      </main>
    </Router>
  )
}