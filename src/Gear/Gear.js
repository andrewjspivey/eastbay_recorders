import React from 'react';
import GearMain from '../assets/GearMain.jpeg';
import OutBoardGear from '../assets/OutBoardGear.jpeg';
import ComputerMix from '../assets/computerMix.jpeg';
import Dynamic from '../assets/Dynamics.jpeg';
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
  color: #000;
  font-weight: normal;
  text-align: center;
  font-size: 25px;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Section = styled.div`
  width: 90%;
  max-width: 10000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectionFlip = styled.div`
  width: 90%;
  max-width: 10000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;
const BoxImage = styled.img`
  display: flex;
  height: 458px;
  width: 610.5px;
  background-image: url(${ComputerMix});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  z-index: 1000;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0 auto;
  width: 566.5px;
  z-index: 100;
`;

const Card = styled.div`
  display: flex;
  margin-top: 250px;
  height: 500px;
  width: 400px;
  background-color: white;
`;

const CardText = styled.text`
  width: 100%;
  background-color: #eeeee5;
  padding: 15% 10% 15% 20%;
  text-align: center;
`;

const Gear = () => {
  return (
    <>
      <Jumbo>
        <Text>
          <h1>Gear</h1>
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
          <BoxImage></BoxImage>
          <Box style={{ marginLeft: '-150px' }}>
            <Card>
              <CardText>
                <h4>01/</h4>
                <h1>Console, Recorders + Monitors</h1>
                <p>
                  Console: Neve 8816 Summing Mixer 16x2 and Neve 8804 Mixing
                  Pack • Recorders: Digidesign Pro Tools HD 32tk, Digidesign 192
                  I/O, Lynx Aurora I/O 16 in/16 out, Apple G5 2.0, Lacie
                  Firewire Drives • Monitors: JBL LSR 28P • Yamaha NS 10 •
                  Realistic Minimus 7
                </p>
              </CardText>
            </Card>
          </Box>
        </Section>
        <SectionFlip>
          <BoxImage></BoxImage>
          <Box style={{ marginRight: '-110px' }}>
            <Card>
              <CardText>
                <h4>01/</h4>
                <h1>Console, Recorders + Monitors</h1>
                <p>
                  Console: Neve 8816 Summing Mixer 16x2 and Neve 8804 Mixing
                  Pack • Recorders: Digidesign Pro Tools HD 32tk, Digidesign 192
                  I/O, Lynx Aurora I/O 16 in/16 out, Apple G5 2.0, Lacie
                  Firewire Drives • Monitors: JBL LSR 28P • Yamaha NS 10 •
                  Realistic Minimus 7
                </p>
              </CardText>
            </Card>
          </Box>
        </SectionFlip>
      </Wrapper>
    </>
  );
};

export default Gear;
