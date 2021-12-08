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
    height: 60vh;
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
    font-size: 20px;
  }
`;
const HeaderPic = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const JumboContainer = styled.header`
  width: 100%;
  padding-top: 50px;
  /* margin-bottom: 3rem; */
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const JumboTitle = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 481px) {
    font-size: 20px;
  }
`;

const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Underline = styled.div`
  height: 3px;
  width: 60px;
  background-color: white;
  @media (max-width: 768px) {
    height: 2px;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeader = () => {
  return (
    <JumboContainer>
      <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
        <JumboHeader src={logo_ebr} />
      </div>
      <HeaderPic>
        <img style={{ width: "100%" }} src={Mic_contactpage} alt="" />
        <NameContainer>
          <JumboTitle>
            <h1 style={{ marginBottom: "10px" }}>CONTACT</h1>
            <Underline />
          </JumboTitle>
        </NameContainer>
      </HeaderPic>
    </JumboContainer>
  );
};

export default ContactHeader;
