import React from "react";
import styled from "styled-components";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <BoxNetwork>
        <a
          href="https://www.facebook.com/luisangel.fernandez.543/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="iconNet"></FaFacebookSquare>
        </a>
        <a
          href="https://www.instagram.com/luis_angelfc11/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare className="iconNet"></FaInstagramSquare>
        </a>
        <a
          href="https://twitter.com/Luis_Angelf11"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare className="iconNet"></FaTwitterSquare>
        </a>
        <a
          href="https://www.youtube.com/channel/UCzsW6R0I-jpLldlOxFJiAgQ"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutubeSquare className="iconNet"></FaYoutubeSquare>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+18292693768&text=Hola vengo de tu web site" target="_blank" rel="noreferrer">
          <FaWhatsappSquare className="iconNet"></FaWhatsappSquare>
        </a>
      </BoxNetwork>
      <BoxCopy>
        <p>©Copyright 2022-2023 | Luis Angel Fernández</p>
      </BoxCopy>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
`;

const BoxNetwork = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333;
  display: flex;
  justify-content: center;

  .iconNet {
    font-size: 35px;
    color: #fff;
    padding: 30px 5px;
    transition: all 0.3s ease-in-out;
  }

  .iconNet:hover {
    opacity: 0.75;
  }
`;

const BoxCopy = styled.div`
  width: 100%;
  height: 50px;
  background-color: #222;

  p {
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
`;
