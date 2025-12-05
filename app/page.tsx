"use client"

import About from "./about/page";
import Home from "./home/page";
import 'aos/dist/aos.css';

import Skill from "./skills/page";
import Projects from "./projects/page";
import ContactForm from "./contact-us/page";
export default function Homes() {


  return (
    
   <>
   <Home/>
   <About/>
   <Skill/>
   <Projects/>
   <ContactForm/></>
  );
}
