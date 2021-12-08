import React from "react";
import logo_ebr from "../assets/logo_ebr.png";
import GearMain from "../assets/GearMain.jpeg";
import OutBoardGear from "../assets/OutBoardGear.jpeg";
import ComputerMix from "../assets/computerMix.jpeg";
import Dynamics from "../assets/Dynamics.jpeg";
import Microphones from "../assets/Microphones.jpeg";
import Instruments from "../assets/Instruments.jpeg";
import styled from "styled-components";

const Row = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 75%;
  display: flex;
  justify-content: center;
  padding: 0px 1rem;
  font-size: 1.1rem;
  line-height: 25px;
  color: black;
  font-weight: normal;
  text-align: center;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 481px;
    align-items: center;
  }
  @media (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;
const SectionFlip = styled(Section)`
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 481px) {
    width: 90%;
  }
`;
const BoxImage = styled.img`
  height: 0 auto;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  z-index: 1000;
  @media (min-width: 1025px) {
    width: 525px;
  }
  @media (max-width: 1024px) {
    width: 425px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    height: 0 auto;
    width: 100%;
  }
  @media (max-width: 525px) {
    height: 0 auto;
    width: 100%;
  }
`;

const BoxRight = styled.div`
  height: 0 auto;
  z-index: 100;
  @media (min-width: 1024px) {
    height: 0 auto;
    width: 400px;
    margin: 0 0 0 -25px;
  }
  @media (max-width: 1024px) {
    background-color: black;
    width: 350px;
    margin: 0 0 0 -25px;
  }
  @media (max-width: 900px) {
    background-color: blue;
    width: 300px;
    margin: 0 0 0 -15px;
  }
  @media (max-width: 768px) {
    height: 0 auto;
    width: 100%;
    margin: 0;
  }
`;

const BoxLeft = styled(BoxRight)`
  @media (min-width: 1025px) {
    margin: 0 -25px 0 0;
  }
  @media (max-width: 1024px) {
    margin: 0 -25px 0 0;
  }
  @media (max-width: 900px) {
    margin: 0 -15px 0 0;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  @media (min-width: 1024px) {
    margin-top: 100px;
    height: 500px;
  }
  @media (max-width: 1023px) {
    margin-top: 100px;
    height: 400px;
  }
  @media (max-width: 900px) {
    margin-top: 150px;
    height: 325px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 2rem;
    justify-content: center;
  }
`;

const CardText = styled.text`
  width: 100%;
  padding: 40px 40px;
  background-color: #eeeee5;
  text-align: center;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Number = styled.h4`
  margin: 0;
  color: #ad1001;
  font-style: italic;
  font-size: 1.7em;
  line-height: 2rem;
  font-weight: normal;
`;
const Header = styled.h4`
  margin: 0;
  color: #ad1001;
  font-style: italic;
  font-size: 1.7em;
  line-height: 2rem;
  font-weight: bold;
`;
const Paragraph = styled.p`
  font-weight: normal;
  line-height: 28px;
  font-size: 0.9em;
  overflow: hidden;
`;

const Gear = () => {

  return (
    <div style={{ width: "100%vw" }}>
      <JumboContainer>
        <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
          <JumboHeader src={logo_ebr} />
        </div>
        <HeaderPic>
          <img style={{ width: "100%" }} src={GearMain} alt="" />
          <NameContainer>
            <JumboTitle>
              <h1 style={{ marginBottom: "10px" }}>GEAR</h1>
              <Underline />
            </JumboTitle>
          </NameContainer>
        </HeaderPic>
      </JumboContainer>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Row>
          <p>
            THE DAYS OF BRAGGING ABOUT RECORDING GEAR ARE THANKFULLY OVER. THAT
            DOESN'T MEAN THAT STUDIOS CAN IGNORE WHAT TOOLS ARE AT THEIR
            DISPOSAL. EAST BAY RECORDERS HAS A BLEND OF ANALOG AND DIGITAL TOOLS
            TO MAKE RECORDING EASY AND WARM. WE'VE ALSO BUILT A COLLECTION OF
            AMAZING INSTRUMENTS FOR THOSE TIMES WHEN AN ARTIST NEEDS SOMETHING
            NEW.
          </p>
        </Row>
      </div>
      <Wrapper>
        <Section>
          <BoxImage src={ComputerMix} alt="Computer Mix"></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <Number>01/</Number>
                <Header>Console, Recorders + Monitors</Header>
                <Paragraph>
                  Console: Neve 8816 Summing Mixer 16x2 and Neve 8804 Mixing
                  Pack • Recorders: Digidesign Pro Tools HD 32tk, Digidesign 192
                  I/O, Lynx Aurora I/O 16 in/16 out, Apple G5 2.0, Lacie
                  Firewire Drives • Monitors: JBL LSR 28P • Yamaha NS 10 •
                  Realistic Minimus 7
                </Paragraph>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
        <SectionFlip>
          <BoxImage src={OutBoardGear} alt="OutBoard Gear"></BoxImage>
          <BoxLeft>
            <Card>
              <CardText>
                <Number>02/</Number>
                <Header>Outboard Gear</Header>
                <Paragraph>
                  Neve 33114 Mic Pre/EQ (2) • Calrec PQ 1161Mic Pre/EQ (4) •
                  Telefunken V72 Mic Pre (2) • API 312 Mic Pre (4) • Vintech 473
                  I (4) • Shadow Hill Mic Pre • Peavey VTM Tube Mic Pre/EQ (2) •
                  UA 8110 Mic Pre (8) • UA 410 Mic Pre Amps (4) • Evil Twin Tube
                  Direct Boxes (2) • Radial J48 • Aphex 107 Tube Esscence Mic
                  Pre (2) • Helios Mic Pre Amps (4)
                </Paragraph>
              </CardText>
            </Card>
          </BoxLeft>
        </SectionFlip>
        <Section>
          <BoxImage src={Dynamics} alt="Dynamics"></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <Number>03/</Number>
                <Header>Dynamics</Header>

                <Paragraph>
                  dbx 160 VU Compressor (3) • dbx 160x Compressor (3) • dbx 163x
                  (2) • UREI 1178 Stereo Compressor • Distressor EL8 (3) •
                  Peavey CDS Compressor (2) • UREI 535 Graphic EQ (4) • Bricasti
                  Reverb • dbx 120 Subharmonic Synthesier
                </Paragraph>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
        <SectionFlip>
          <BoxImage src={Microphones} alt="Microphones"></BoxImage>
          <BoxLeft>
            <Card>
              <CardText>
                <Number>04/</Number>
                <Header>Microphones</Header>
                <Paragraph>
                  AKG D112 (2) • AKG 414 (2) • Shure Beta 52 (2) • Shure Beta 57
                  (4) • Shure 57 (2) • Royer 121 Ribbon • Royer 122 Ribbon •
                  Aston Stealth • Aston Starlight (2) • Aston Spirit • Audio
                  Technica 4047 (4) • Audio Technica 4033 (2) • Audio Technica
                  4050 • Audio Technica AE 3000 (3) • Audio Technica AE 5100 (3)
                  • Audio Technica Atm 25 (3) • Audio Technica Ae 6100 (3) •
                  Lauten Oceanus (3) • Lauten Atlantis FC -387 (3) • Lauten
                  Horizon (2) • Beesneez (2) • Octavia 12 • Mojave MA 200 •
                  Beeznees LuLu’s (2)
                </Paragraph>
              </CardText>
            </Card>
          </BoxLeft>
        </SectionFlip>
        <Section>
          <BoxImage src={Instruments} alt="Instruments"></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <Number>05/</Number>
                <Header>Instruments</Header>
                <Paragraph>
                  Amps + Cabinets: Marshall 1968 Vintage 50 w Lead • Marshall
                  800 • Marshall JMP 50 Combo • Dan Electro guitar amp • Fender
                  De Ville • Fender Princeton • JMP Combo • Guitars + Bass:
                  Gibson L6-S • Fender Stratocaster • Epihone • Fender Bass Matt
                  Freeman Model • Drums + Cymbals: Vintage Rogers Kit • Sabian
                  Cymbals • Tons of effect pedals • Extensive Sample and Loop
                  Library
                </Paragraph>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
      </Wrapper>
    </div>
  );
};

export default Gear;
