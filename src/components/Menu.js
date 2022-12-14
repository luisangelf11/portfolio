/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

export default function Menu() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    if (click) setClick(false);
    else setClick(true);
  };
  return (
    <HeaderMenu>
      <h3>Luis Angel Fernandez</h3>
      <nav className={click === true ? "active" : ""}>
        <div className="links">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#skills">Herramientas</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contactar</a>
        </div>
      </nav>
      <div className="burger">
        <BurgerButton handelClick={handelClick} click={click} />
      </div>
    </HeaderMenu>
  );
}

const HeaderMenu = styled.header`
  width: 100%;
  height: 70px;
  background-color: #333;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    position: fixed;
    z-index: 999;
  }

  h3 {
    display: block;
    width: 250px;
    color: #fff;
    text-transform: uppercase;
    margin: 10px 80px;
    letter-spacing: 10px;
  }

  .active {
    transition: all 0.3s ease-in-out;
    visibility: visible;
    margin-left: 0;
  }

  @media screen and (max-width: 900px) {
    display: block;

    h3 {
      display: none;
    }
  }

  .links {
    width: 100%;
    height: 70%;
    margin-top: 10px;
  }

  nav {
    margin: auto;
    width: 50%;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
      top: 0;
      margin: 0;
      background-color: rgb(56, 55, 55);
      width: 150px;
      margin-left: -200px;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      height: 100vh;
      z-index: 1000;
      position: fixed;
      flex-direction: column;

      a {
        border-bottom: 1px solid #fff;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
      }

      a:hover {
        border-bottom: 2px solid #fff;
        padding: 15px;
      }

      .links {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      padding: 10px;
      transition: all 0.1s ease-in-out;
      font-weight: 500;
      text-transform:uppercase;
      font-size:14px;
    }

    a:hover {
      border-bottom: 2px solid #fff;
    }
  }

  .burger {
    margin-left: 87%;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;
