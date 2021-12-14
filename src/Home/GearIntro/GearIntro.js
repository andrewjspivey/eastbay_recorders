import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mixer_ebr from "../../assets/mixer_ebr.jpeg";

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 2rem 0 4rem 0;
  @media (max-width: 768px) {
    padding: 0.5rem 0 2rem 0;
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
  font-size: 2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
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
const ViewMore = styled.div`
  width: 30%;
  height: 2.5rem;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  align-items: center;
  background-color: #dd3233;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 950px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    align-self: center;
    margin: 1rem;
  }
`;
const Underline = styled.div`
  height: 3px;
  width: 60px;
  background-color: black;
  @media (max-width: 768px) {
    height: 2px;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Intro = () => {
  return (
    <Container>
      <IntroContainer>
        <TextContent>
          <NameContainer>
            <ContentHeader>IT'S NOT ABOUT GEAR</ContentHeader>
            <Underline />
          </NameContainer>
          <div style={{ paddingTop: "0.2rem", width: "100%" }}>
            <p style={{ lineHeight: "1.7rem", fontWeight: "bold" }}>
              It’s about the song and doing whatever’s needed with whatever
              tools to bring it to life. EBR takes a hybrid approach to
              recording where old school recording technique meets today’s
              technology. The entire goal is to capture performances and deliver
              the sounds that feel authentic.
            </p>
          </div>
          <div
            style={{
              paddingTop: "0.2rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ lineHeight: "1.5rem", fontWeight: "300" }}>
              That means our engineers rely on the right microphone to the right
              preamp into digital recorders for the cleanest signal path
              possible. Too techy? Okay. Everything that’s on our racks or in
              our boxes is there to make your music sound better. Check our Gear
              page for more information.
            </p>
            <ViewMore>
              <Link
                to="/gear"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <h5 style={{ margin: "0" }}>Check it out</h5>
              </Link>
            </ViewMore>
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
