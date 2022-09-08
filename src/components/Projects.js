import React from "react";
import styled from "styled-components";
import clinica from "../images/clinicas.jpg";
import empresa from "../images/empresas.jpg";
import cursos from "../images/cursos.jpg";

export default function Projects() {
  return (
    <BoxProjects id="projects">
      <h3>Proyectos recientes</h3>
      <div className="projects">
        <div className="box-project">
          <img src={clinica} alt="Clinica" />
          <h4>Página de clinica</h4>
          <a
            href="https://luisangelf11.github.io/ClinicPage/"
            rel="noreferrer"
            target="_blank"
          >
            Ir al sitio
          </a>
        </div>
        <div className="box-project">
          <img src={empresa} alt="Clinica" />
          <h4>Página de empresas</h4>
          <a
            href="https://luisangelf11.github.io/Mi-portafolios/"
            rel="noreferrer"
            target="_blank"
          >
            Ir al sitio
          </a>
        </div>
        <div className="box-project">
          <img src={cursos} alt="Clinica" />
          <h4>Página de cursos</h4>
          <a
            href="https://luisangelf11.github.io/Developer_Finally/index.html"
            rel="noreferrer"
            target="_blank"
          >
            Ir al sitio
          </a>
        </div>
      </div>
    </BoxProjects>
  );
}

const BoxProjects = styled.section`
  width: 100%;
  height: 450px;
  background-color: #fff;

  @media (max-width: 950px) {
    height: 1180px;

    .projects {
      flex-direction: column;
    }

    .box-project {
      margin: 10px auto;
    }
  }

  .projects {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  h3 {
    padding: 30px;
    color: #222;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  .box-project {
    width: 300px;
    height: 320px;
    box-shadow: 10px 10px 10px 10px rgb(221, 220, 218);
    border-radius: 3%;

    img {
      width: 100%;
      height: 60%;
    }

    a {
      display: block;
      width: 100px;
      margin: auto;
      color: #fff;
      text-align: center;
      text-decoration: none;
      padding: 10px;
      background-color: #333;
      cursor: pointer;
      border-radius: 20px 30px;
      transition: all 0.3s ease-in-out;
    }

    h4 {
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 5px;
      color: #222;
    }

    a:hover {
      opacity: 0.75;
    }
  }
`;
