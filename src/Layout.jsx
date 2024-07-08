/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import './layout.css'
import OpeningSection from './sections/OpeningSection';
import Projects from './sections/Projects'
import ToolsAndTechnologies from './sections/ToolsAndTechnology';
import AboutMe from './sections/AboutMe';

function Layout() {
  return (
    <main className='layout'>
      <Header/>
      <OpeningSection/>
      <Projects/>
      <ToolsAndTechnologies/>
      <AboutMe/>
      <Footer/>
    </main>
  );
}

export default Layout;