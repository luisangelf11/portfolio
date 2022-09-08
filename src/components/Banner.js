import React from "react";
import styled from "styled-components";
import Yo from "../images/YO.JPG";
import Fondo from "../images/fondo.jpg";

export default function Banner() {
  return (
    <BannerContainer style={{ backgroundImage: `url(${Fondo})` }}>
      <img src={Yo} alt="Luis Angel" />
      <div className="box">
        <h2>Bienvenido a mi portafolios</h2>
        <p>
          Mi nombre es Luis Angel, soy un estudiante de informática que ama la
          programacion. En este sitio web les comparto algunos de mis servicios
          y proyectos que he realizado a lo largo de mis estudios.
        </p>
      </div>
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  width: 100%;
  height: 569px;
  background-size: cover;

  img {
    width: 150px;
    height: 200px;
    display: block;
    margin: auto;
    border-radius: 40px 50px 40px 60px;
    padding: 30px;
  }

  @media (max-width: 900px) {
    height: 600px;

    img {
      width: 150px;
      height: 200px;
      display: block;
      margin: auto;
      border-radius: 90px 100px 90px 110px;
      padding: 80px;
    }
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    display: block;
    padding: 5px;
    color: #fff;
    font-family: monospace;
    white-space: nowrap;
    border-right: 4px solid;
    width: 27ch;
    animation: typing 2s steps(27), blink 0.5s infinite step-end alternate;
    overflow: hidden;
    font-size: 28px;
    margin: 1rem auto;
  }

  p {
    display: block;
    margin: auto;
    width: 300px;
    height: auto;
    text-align: center;
    font-weight: 500;
    color: #fff;
  }

  .box {
    width: 500px;
    height: 200px;
    margin: auto;
    background-color: rgba(138, 139, 139, 0.507);
    border-radius: 30px 50px 30px 100px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 18px;
    }
    .box {
      width: 350px;
      height: 200px;
      margin: auto;
      background-color: rgba(138, 139, 139, 0.507);
      border-radius: 30px 50px 30px 100px;
    }
  }
`;
