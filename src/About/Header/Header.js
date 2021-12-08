import React from "react";
import styled from "styled-components";
import AboutMain from "../../assets/AboutMain.jpeg";
import logo_ebr from "../../assets/logo_ebr.png";
import {
  JumboContainer,
  JumboHeader,
  JumboTitle,
  Underline,
  HeaderPic,
} from "../../BlogHome/BlogHome";

const Logo = styled.img`
  z-index: 1;
  position: absolute;
  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 900px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const AboutHeader = styled.div`
  width: 100%;
  padding-top: 56px;
`;
const LogoDiv = styled.div`
  position: absolute;
  padding: 1rem 0rem;
  @media (max-width: 1024px) {
    padding: 1rem 1.4rem;
  }
  @media (max-width: 900px) {
    padding: 1rem 4.5rem;
  }
`;
const AboutImg = styled.div`
  background-image: url(${AboutMain});
  width: 100%;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
const Text = styled.div`
  font-weight: bold;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const UnderLine = styled.div`
  width: 80px;
  height: 5px;
  background-color: white;
`;

const Header = () => {
  return (
    <AboutHeader>
      <LogoDiv>
        <Logo src={logo_ebr} />
      </LogoDiv>
      <ContactText>
        <Text>
          <h1>ABOUT EBR</h1>
          <UnderLine />
        </Text>
      </ContactText>
      <AboutImg />
    </AboutHeader>
  );
};

export default Header;
