/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import './layout.css'

function Layout() {
  return (
    <main className='layout'>
        <Header />
        <Outlet />
        <Footer/>
    </main>
  );
}

export default Layout;