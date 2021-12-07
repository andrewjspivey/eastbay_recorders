import React from "react";
import styled from "styled-components";
import logo_ebr from "../../assets/logo_ebr.png";
import Mic_contactpage from "../../assets/Mic_contactpage.jpeg";

const Container = styled.header`
  width: 100%;
  padding-top: 55px;
  overflow: hidden;
  position: relative;
  height: 65vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const ContactHead = styled.img`
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
`;

const LogoDiv = styled.div`
  position: absolute;
  padding: 1rem 0rem;
  @media (max-width: 1024px) {
    padding: 1rem 1.4rem;
  }
`;

const ContactLogo = styled.div`
  background-image: url(${Mic_contactpage});
  display: flex;
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ContactText = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  color: white;
  font-size: 2rem;
  font-family: "Gotham";
  @media (max-width: 481px) {
    font-size: 25px;
  }
`;

const ContactHeader = () => {
  return (
    <Container>
      <ContactText>
        <h1>CONTACT</h1>
      </ContactText>
      <LogoDiv>
        <ContactHead src={logo_ebr} />
      </LogoDiv>
      <ContactLogo />
    </Container>
  );
};

export default ContactHeader;
