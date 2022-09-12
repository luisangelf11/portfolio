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
      <Footer />
    </>
  );
}

export default App;
