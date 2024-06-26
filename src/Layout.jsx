/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import OpeningSection from './sections/OpeningSection';
import Projects from './sections/Projects';

function Layout() {
  return (
    <main className='flex flex-col min-h-screen bg-black-1 bg-fixed'>
        <Header />
        <Outlet />
        <OpeningSection/>
        <Projects/>
        <Footer/>
    </main>

    // <main className="relative">
    //   <Header/>
    //   <section>
    //     <Outlet/>
    //   </section>
    //   <section>
    //     <Footer/>
    //   </section>
    // </main>
  );
}

export default Layout;
