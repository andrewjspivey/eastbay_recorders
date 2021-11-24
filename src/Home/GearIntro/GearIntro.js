import React from "react";
import styled from "styled-components";
import mixer_ebr from "../../assets/mixer_ebr.jpeg";

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 4rem 0 3rem 0;
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
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
          <ContentHeader>IT'S NOT ABOUT GEAR</ContentHeader>
          <div style={{ paddingTop: "0.2rem", width: "100%" }}>
            <p style={{ lineHeight: "1.7rem", fontWeight: "bold" }}>
              t’s about the song and doing whatever’s needed with whatever tools
              to bring it to life. EBR takes a hybrid approach to recording
              where old school recording technique meets today’s technology. The
              entire goal is to capture performances and deliver the sounds that
              feel authentic.
            </p>
          </div>
          <div style={{ paddingTop: "0.2rem", width: "100%" }}>
            <p style={{ lineHeight: "1.5rem", fontWeight: "300" }}>
              That means our engineers rely on the right microphone to the right
              preamp into digital recorders for the cleanest signal path
              possible. Too techy? Okay. Everything that’s on our racks or in
              our boxes is there to make your music sound better. Check our Gear
              page for more information.
            </p>
          </div>
        </TextContent>
        <IntroImageCont>
          <img style={{ width: "90%" }} src={mixer_ebr} alt="mixer" />
        </IntroImageCont>
      </IntroContainer>
    </Container>
  );
};

export default Intro;
