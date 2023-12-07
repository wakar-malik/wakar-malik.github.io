import React from "react";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Works from "./sections/works/Works";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Github from "./sections/github/Github";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Works />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
