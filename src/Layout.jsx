/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';

function Layout() {
  return (
    <main className='relative flex flex-col min-h-screen bg-gradient-back bg-fixed'>
        <Header />
        <Outlet />
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
