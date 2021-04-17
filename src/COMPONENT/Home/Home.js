import React from 'react'
import BodySection from "../Navbar/BodySection"
import Navbar from "../Navbar/Navbar"
import Content from "../Navbar/Content"
import {Data1,projectsData} from "./Data"
import Projects from "../Navbar/Projects"
import Contactme from "../Navbar/Contactme"

function Home() {
    return (
        <>
          <BodySection/>  
          <Projects href="Projects" projectsData={projectsData}/>
          <Content{...Data1}/>
          <Contactme href="Contact"/>

        </>
    )
}

export default Home
