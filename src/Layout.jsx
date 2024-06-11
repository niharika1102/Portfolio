import React from 'react'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { Outlet } from 'react-router-dom'
import OpeningSection from './sections/OpeningSection'
import Projects from './sections/Projects'
import ToolsAndTechnology from './sections/ToolsAndTechnology'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* <OpeningSection/>
        <Projects/>
        <ToolsAndTechnology/>
        <Footer/> */}
    </>
  )
}

export default Layout