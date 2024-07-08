import React from "react"
import './layout.css'
import Header from "./sections/Header"
import OpeningSection from "./sections/OpeningSection"
import Projects from "./sections/Projects"
import ToolsAndTechnologies from "./sections/ToolsAndTechnology"
import AboutMe from "./sections/AboutMe"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <main className="relative">
      <Header/>
      <section className="xl:padding-l wide:padding-b padding-r">
        <OpeningSection/>
      </section>
      <section className="padding">
        <Projects/>
      </section>
      <section className="padding">
        <ToolsAndTechnologies/>
      </section>
      <section className="padding-x py-10">
        <AboutMe/>
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer/>
      </section>
    </main>
  )
}