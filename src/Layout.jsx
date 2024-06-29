/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';

function Layout() {
  return (
    <main className='flex flex-col min-h-screen bg-black-1 bg-fixed'>
        <Header />
        <Outlet />
        <Footer/>
    </main>
  );
}

export default Layout;

