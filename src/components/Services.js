import React from "react";
import styled from "styled-components";
import { FaDesktop, FaFacebook, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePhotoCameraFront } from "react-icons/md";

export default function Services() {
  return (
    <ServicesContainer id="services">
      <h3>servicios</h3>
      <div className="item">
        <FaDesktop className="icon" />
        <p>Desarrollo de aplicaciones de escritorio</p>
      </div>
      <div className="item">
        <MdOutlinePhotoCameraFront className="icon" />
        <p>Desarrollador Front-end</p>
      </div>
      <div className="item">
        <FaFacebook className="icon" />
        <p>Community manager</p>
      </div>
      <div className="item">
        <FaChalkboardTeacher className="icon" />
        <p>Tutor de C# y JavaScript</p>
      </div>
    </ServicesContainer>
  );
}

const ServicesContainer = styled.section`
  width: 100%;
  background-color: #ccc;
  height: 300px;

  h3 {
    padding: 20px;
    color: #222;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .item {
    width: 30%;
    margin: auto;
    height: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .icon {
    font-size: 25px;
    padding: 10px;
    color: #222;

    @media (max-width: 900) {
      padding: 3px;
      font-size: 20px;
    }
  }

  p {
    display: block;
    padding: 10px;
    font-weight: 500;
    margin: -1px 2px;
    color: #222;

    @media (max-width: 900px) {
      padding: 3px;
      font-weight: 400;
      margin: 6px 5px;
      font-size: 14px;
    }
  }
`;
