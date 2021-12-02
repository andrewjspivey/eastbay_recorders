import React from "react";
import styled from "styled-components";
import intro_ebr from "../../assets/intro_ebr.jpeg";

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 3rem 0 4rem 0;
  @media (max-width: 768px) {
    padding: 1rem 0 2rem 0;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IntroImageCont = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentHeader = styled.h2`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2em;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContent = styled.div`
  font-family: "Gotham";
  width: 50%;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Intro = () => {
  return (
    <Container>
      <IntroContainer>
        <TextContent>
          <ContentHeader>REAL MUSIC • REAL TALENT • REAL SONGS</ContentHeader>
          <div style={{ paddingTop: "0.2rem", width: "100%" }}>
            <p style={{ lineHeight: "1.7rem", fontWeight: "bold" }}>
              East Bay Recorders is an intimate, vibey studio where real music
              gets made. Amazing instruments, vintage recording gear, top-notch
              digital tools, and the phone numbers of some of the San Francisco
              Bay Area’s best session players are found here.
            </p>
          </div>
          <div style={{ paddingTop: "0.2rem", width: "100%" }}>
            <p style={{ lineHeight: "1.5rem", fontWeight: "300" }}>
              EBR has a long history of recording and mixing dates with legends
              in jazz (Ray Obiedo, Will Kennedy), punk rock (Rancid, Cock
              Sparrer), alt-rock (Cracker, Matt Jaffe), and even country
              (Country Joe McDonald, The Damn Liars). We’re ready when you are.
            </p>
          </div>
        </TextContent>
        <IntroImageCont>
          <img style={{ width: "90%" }} src={intro_ebr} alt="" />
        </IntroImageCont>
      </IntroContainer>
    </Container>
  );
};

export default Intro;
