/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

export default function Menu() {
    const[click, setClick] = useState(false);
    const handelClick =()=>{
        if(click) setClick(false);
        else setClick(true);
    }
  return (
    <HeaderMenu>
      <h3>Luis Angel Fernandez</h3>
      <nav className={click === true ? "active": ""}>
        <div className="links">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#skills">Herramientas</a>
          <a href="#">Proyectos</a>
          <a href="#">Contactar</a>
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

  h3 {
    display: block;
    width: 250px;
    color: #fff;
    text-transform: uppercase;
    margin: 10px 80px;
    letter-spacing: 10px;
  }

  .active{
    transition:all .3s ease-in-out;
    visibility:visible;
    margin-left:0;
  }

  @media screen and (max-width: 900px) {
    display: block;

    h3 {
      display: none;
    }
  }

  .links{
    width:100%;
    height:70%;
    margin-top:10px;
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
      margin-left:-200px;
      visibility:hidden;
      transition:all .3s ease-in-out;
      height: 100vh;
      z-index: 1000;
      position: fixed;
      flex-direction: column;

      a {
        border-bottom: 1px solid #fff;
        text-transform:uppercase ;
      }

      .links{
        width:100%;
        height:80%;
        display:flex;
        flex-direction:column;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      padding: 10px;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
    }

    a:hover {
      padding: 15px;
    }
  }

  .burger {
    margin-left: 85%;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;
