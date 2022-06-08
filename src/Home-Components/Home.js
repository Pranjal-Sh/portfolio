import React from 'react';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css';
import useFetch from "../useFetch";

export default function Home() {
  const { error, isPending, data: projects} = useFetch('http://localhost:8000/projects');
    return (
      
      <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
  
      <Navbar title="Home" projects="Projects" about="About Me" skills="Skills" education="Education" contact="Contact Me"/>
      <Introduction/>    
      { projects && <Projects projects={projects} /> }
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
      </>
    );
  } 