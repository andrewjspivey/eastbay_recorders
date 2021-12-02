import React from "react";
import "./AboutUs.css";
import styled from "styled-components";
import MichaelLookingDown from "../../assets/MichealLookingDown.jpeg";

const AboutUsWrapper = styled.div`
  background-color: #626362;
  color: white;
  font-size: 14px;
  padding: 100px 50px 100px 50px;
  line-height: 25px;
  @media (max-width: 950px) {
    padding: 100px 100px 50px 100px;
  }
  @media (max-width: 840px) {
    display: block;
    padding: 50px 50px 50px 50px;
  }
  @media (max-width: 375px) {
    display: block;
    padding: 50px 30px;
  }
`;
const UnderLine = styled.div`
  width: 60px;
  height: 3px;
  background-color: white;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 840px) {
    width: 100%;
    display: block;
    padding: 0;
  }
`;
const Div = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 840px) {
    width: 100%;
  }
`;
const ImgDiv = styled.div`
  width: 50%;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 840px) {
    width: 100%;
    justify-content: center;
    padding: 0;
  }
`;

const NameTag = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 1024px) {
    font-size: 25px;
  }
`;
const TitleTag = styled.div`
  text-align: center;
  font-size: 16px;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Body>
        <Div>
          <NameTag>MICHAEL ROSEN</NameTag>
        </Div>
        <Div>
          <img className="michaelLookingDown" src={MichaelLookingDown} alt="" />
        </Div>
      </Body>
      {/* <Div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <NameTag>MICHAEL ROSEN</NameTag>
          <br />
          <UnderLine />
        </div>
        <br />
        <TitleTag>PRODUCER/ENGINEER</TitleTag>
        <p>
          Michael Rosen is East Bay Recorder’s owner/bottle washer/fuse changer.
        </p>
        <p>
          Michael got introduced to the recording industry while he was working
          the graveyard shift at a 7-11 in the San Fernando Valley of Los
          Angeles. This crazy, shabby looking dude would come in every night to
          get a pack of smokes and some O.J. After a couple of weeks of asking,
          he finally told Michael that he worked at Capitol Studios
        </p>
        <p>
          The first band he watched record was Booker T. and the M.G.’s. The
          vibe was electric, and Michael found a home
        </p>
        <p>
          His first paying gig was at The Automatt in San Francisco, one of the
          hottest studios at the time. He went from errand engineer to assistant
          to engineer. He bounced to Fantasy Studios in Berkeley, and then he
          struck out on his own
        </p>
        <p className="lastMichaelAboutMePTag">
          Rosen’s credit list features dozens of punk, rock, metal, and (yes)
          even a country record. He’s worked with Rancid, AFI, Less Than Jake,
          Lars Fredrickson and The Bastards, Green Day, Journey, Tesla, Todd
          Rundgren, The Old Firm Casuals, Santana, Papa Roach, Cock Sparrer,
          Greg Kihn, Testament, Vicious Rumors, Death Angel, Forbidden,
          Violence, and dozens more.
        </p>

        <ImgDiv>
          <img className="michaelLookingDown" src={MichaelLookingDown} alt="" />
        </ImgDiv>
      </Div> */}
    </AboutUsWrapper>
  );
};

export default AboutUs;
