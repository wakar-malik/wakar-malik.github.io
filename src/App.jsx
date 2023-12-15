import React from "react";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Github from "./sections/github/Github";
import Tools from "./sections/tools/Tools";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
