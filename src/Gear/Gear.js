import React from 'react';
import GearMain from '../assets/GearMain.jpeg';
import OutBoardGear from '../assets/OutBoardGear.jpeg';
import ComputerMix from '../assets/computerMix.jpeg';
import Dynamics from '../assets/Dynamics.jpeg';
import Microphones from '../assets/Microphones.jpeg';
import Instruments from '../assets/Instruments.jpeg';
import styled from 'styled-components';

const Jumbo = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;
  background-image: url(${GearMain});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
`;
const Text = styled.div`
  width: 100%;
  top: 50%;
  text-align: center;
  color: white;
  z-index: 10;
`;
const Row = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 1080;
  width: 210;
  margin: 0 45px;
  padding: 0 60px;
  font-size: 1.07em;
  line-height: 25px;
  color: black;
  font-weight: normal;
  text-align: center;
  font-size: 25px;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Section = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    /* background-color: red; */
    flex-direction: column;
  }
`;
const SectionFlip = styled(Section)`
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;
const BoxImage = styled.img`
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  z-index: 1000;
  @media (min-width: 1024px) {
    height: 0 auto;
    width: 525px;
  }
  @media (max-width: 1023px) {
    height: 0 auto;
    width: 425px;
  }
  @media (max-width: 768px) {
    height: 0 auto;
    width: 525px;
  }
`;

const BoxRight = styled.div`
  z-index: 100;
  @media (min-width: 1024px) {
    background-color: purple;
    height: 0 auto;
    width: 400px;
    margin: 0 0 0 -25px;
  }
  @media (max-width: 1023px) {
    height: 0 auto;
    width: 350px;
    margin: 0 0 0 -25px;
  }
  @media (max-width: 768px) {
    height: 0 auto;
    width: 525px;
    margin: 0;
  }
`;

const BoxLeft = styled(BoxRight)`
  @media (min-width: 1024px) {
    margin: 0 -25px 0 0;
  }
  @media (max-width: 1023px) {
    margin: 0 -25px 0 0;
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
    margin-top: 250px;
    height: 500px;
  }
  @media (max-width: 1023px) {
    margin-top: 200px;
    height: 400px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 200px;
  }
`;

const CardText = styled.text`
  width: 100%;
  padding: 40px 40px;
  background-color: #eeeee5;
  text-align: center;
`;

const Gear = () => {
  const styles = {
    header: {
      margin: '0',
      color: '#AD1001',
      fontStyle: 'italic',
      fontSize: '1.7em',
      lineHeight: 'initial',
      fontWeight: 'normal',
      weight: {
        margin: '0',
        color: '#AD1001',
        fontStyle: 'italic',
        fontSize: '1.7em',
        lineHeight: 'initial',
        fontWeight: 'bold',
      },
    },
    text: {
      lineHeight: '28px',
      fontSize: '0.9em',
      fontWeight: 'normal',
    },
  };

  return (
    <>

      <Jumbo>
        <Text>
          <h4>Gear</h4>
        </Text>
      </Jumbo>
      <div style={{ height: '120px' }}></div>
      <Row>
        <p>
          THE DAYS OF BRAGGING ABOUT RECORDING GEAR ARE THANKFULLY OVER. THAT
          DOESN'T MEAN THAT STUDIOS CAN IGNORE WHAT TOOLS ARE AT THEIR DISPOSAL.
          EAST BAY RECORDERS HAS A BLEND OF ANALOG AND DIGITAL TOOLS TO MAKE
          RECORDING EASY AND WARM. WE'VE ALSO BUILT A COLLECTION OF AMAZING
          INSTRUMENTS FOR THOSE TIMES WHEN AN ARTIST NEEDS SOMETHING NEW.
        </p>
      </Row>
      <Wrapper>
        <Section>
          <BoxImage src={ComputerMix} alt='Computer Mix'></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <h4 style={styles.header}>01/</h4>
                <h4 style={styles.header.weight}>
                  Console, Recorders + Monitors
                </h4>
                <p style={styles.text}>
                  Console: Neve 8816 Summing Mixer 16x2 and Neve 8804 Mixing
                  Pack • Recorders: Digidesign Pro Tools HD 32tk, Digidesign 192
                  I/O, Lynx Aurora I/O 16 in/16 out, Apple G5 2.0, Lacie
                  Firewire Drives • Monitors: JBL LSR 28P • Yamaha NS 10 •
                  Realistic Minimus 7
                </p>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
        <SectionFlip>
          <BoxImage src={OutBoardGear} alt='OutBoard Gear'></BoxImage>
          <BoxLeft>
            <Card>
              <CardText>
                <h4 style={styles.header}>02/</h4>
                <h4 style={styles.header.weight}>Outboard Gear</h4>
                <p style={styles.text}>
                  Neve 33114 Mic Pre/EQ (2) • Calrec PQ 1161Mic Pre/EQ (4) •
                  Telefunken V72 Mic Pre (2) • API 312 Mic Pre (4) • Vintech 473
                  I (4) • Shadow Hill Mic Pre • Peavey VTM Tube Mic Pre/EQ (2) •
                  UA 8110 Mic Pre (8) • UA 410 Mic Pre Amps (4) • Evil Twin Tube
                  Direct Boxes (2) • Radial J48 • Aphex 107 Tube Esscence Mic
                  Pre (2) • Helios Mic Pre Amps (4)
                </p>
              </CardText>
            </Card>
          </BoxLeft>
        </SectionFlip>
        <Section>
          <BoxImage src={Dynamics} alt='Dynamics'></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <h4 style={styles.header}>03/</h4>
                <h4 style={styles.header.weight}>Dynamics</h4>

                <p style={styles.text}>
                  dbx 160 VU Compressor (3) • dbx 160x Compressor (3) • dbx 163x
                  (2) • UREI 1178 Stereo Compressor • Distressor EL8 (3) •
                  Peavey CDS Compressor (2) • UREI 535 Graphic EQ (4) • Bricasti
                  Reverb • dbx 120 Subharmonic Synthesier
                </p>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
        <SectionFlip>
          <BoxImage src={Microphones} alt='Microphones'></BoxImage>
          <BoxLeft>
            <Card>
              <CardText>
                <h4 style={styles.header}>04/</h4>
                <h4 style={styles.header.weight}>Microphones</h4>
                <p style={styles.text}>
                  AKG D112 (2) • AKG 414 (2) • Shure Beta 52 (2) • Shure Beta 57
                  (4) • Shure 57 (2) • Royer 121 Ribbon • Royer 122 Ribbon •
                  Aston Stealth • Aston Starlight (2) • Aston Spirit • Audio
                  Technica 4047 (4) • Audio Technica 4033 (2) • Audio Technica
                  4050 • Audio Technica AE 3000 (3) • Audio Technica AE 5100 (3)
                  • Audio Technica Atm 25 (3) • Audio Technica Ae 6100 (3) •
                  Lauten Oceanus (3) • Lauten Atlantis FC -387 (3) • Lauten
                  Horizon (2) • Beesneez (2) • Octavia 12 • Mojave MA 200 •
                  Beeznees LuLu’s (2)
                </p>
              </CardText>
            </Card>
          </BoxLeft>
        </SectionFlip>
        <Section>
          <BoxImage src={Instruments} alt='Instruments'></BoxImage>
          <BoxRight>
            <Card>
              <CardText>
                <h4 style={styles.header}>05/</h4>
                <h4 style={styles.header.weight}>Instruments</h4>
                <p style={styles.text}>
                  Amps + Cabinets: Marshall 1968 Vintage 50 w Lead • Marshall
                  800 • Marshall JMP 50 Combo • Dan Electro guitar amp • Fender
                  De Ville • Fender Princeton • JMP Combo • Guitars + Bass:
                  Gibson L6-S • Fender Stratocaster • Epihone • Fender Bass Matt
                  Freeman Model • Drums + Cymbals: Vintage Rogers Kit • Sabian
                  Cymbals • Tons of effect pedals • Extensive Sample and Loop
                  Library
                </p>
              </CardText>
            </Card>
          </BoxRight>
        </Section>
      </Wrapper>
    </>
  );
};

export default Gear;
