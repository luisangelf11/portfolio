import React from "react";
import { SiCsharp, SiJavascript, SiMicrosoftsqlserver } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import styled from "styled-components";

export default function Skills() {
  return (
    <SkillsConatiner id="skills">
      <h3>Tecnologías de desarrollo</h3>
      <BoxIcons>
        <FaHtml5 className="icon" />
        <FaCss3Alt className="icon" />
        <SiJavascript className="icon" />
        <FaReact className="icon" />
        <SiCsharp className="icon" />
        <SiMicrosoftsqlserver className="icon" />
        <FaGitAlt className="icon" />
      </BoxIcons>
    </SkillsConatiner>
  );
}

const SkillsConatiner = styled.section`
  width: 100%;
  height: 70px;
  h3 {
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    color: #333;
    letter-spacing:10px;

    @media(max-width:500px){
      font-size: 20px;
    }
  }
`;

const BoxIcons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  .icon {
    color: #333;
    font-size: 50px;
    margin-left: 20px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .icon:hover {
    opacity: 0.75;
  }

  @media(max-width:500px){
      .icon{
        font-size:30px;
      }
    }
`;
