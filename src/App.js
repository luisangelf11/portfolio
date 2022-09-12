import React from "react";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BtnUp from "./components/BtnUp";

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
      <BtnUp />
      <Footer />
    </>
  );
}

export default App;
