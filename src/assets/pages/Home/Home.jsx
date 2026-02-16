import React from "react";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Skills from "./Sections/Skills.jsx";
import Projects from "./Sections/Projects.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
