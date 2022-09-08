import React from "react";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <About />
      <Services />
      <Projects />
      <ContactForm />
      <Skills />
    </>
  );
}

export default App;
