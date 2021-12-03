import React from "react";
import "./AboutUs.css";
import styled from "styled-components";
import MichaelLookingDown from "../../assets/MichealLookingDown.jpeg";
import AnneMarie from "../../assets/AnneMarie.jpeg";

const AboutUsWrapper = styled.div`
  background-color: #626362;
  color: white;
  font-size: 14px;
  padding: 100px 100px 100px 100px;
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
  align-items: center;
  @media (max-width: 840px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
const Div = styled.div`
  display: flex;
  // width: ${(props) => (props.thing === true ? "50%" : "100%")};
  width: 50%;
  justify-content: center;
  @media (max-width: 840px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  width: 50%;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const Text = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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
        <TextWrap>
          <Div>
            <Text>
              <NameTag>MICHAEL ROSEN</NameTag>
              <br />
              <UnderLine />
              <br />
              <TitleTag>PRODUCER/ENGINEER</TitleTag>
            </Text>
          </Div>
          <Div>
            <Text>
              <p>
                Michael Rosen is East Bay Recorder’s owner/bottle washer/fuse
                changer.
              </p>
              <p>
                Michael got introduced to the recording industry while he was
                working the graveyard shift at a 7-11 in the San Fernando Valley
                of Los Angeles. This crazy, shabby looking dude would come in
                every night to get a pack of smokes and some O.J. After a couple
                of weeks of asking, he finally told Michael that he worked at
                Capitol Studios
              </p>
              <p>
                The first band he watched record was Booker T. and the M.G.’s.
                The vibe was electric, and Michael found a home
              </p>
              <p>
                His first paying gig was at The Automatt in San Francisco, one
                of the hottest studios at the time. He went from errand engineer
                to assistant to engineer. He bounced to Fantasy Studios in
                Berkeley, and then he struck out on his own
              </p>
              <p className="lastMichaelAboutMePTag">
                Rosen’s credit list features dozens of punk, rock, metal, and
                (yes) even a country record. He’s worked with Rancid, AFI, Less
                Than Jake, Lars Fredrickson and The Bastards, Green Day,
                Journey, Tesla, Todd Rundgren, The Old Firm Casuals, Santana,
                Papa Roach, Cock Sparrer, Greg Kihn, Testament, Vicious Rumors,
                Death Angel, Forbidden, Violence, and dozens more.
              </p>
            </Text>
          </Div>
        </TextWrap>
        <Div>
          <img className="aboutUsImgs" src={MichaelLookingDown} alt="" />
        </Div>
      </Body>
      <Body>
        <TextWrap>
          <Div>
            <Text>
              <NameTag>ANNE-MARIE-PLEAU</NameTag>
              <br />
              <UnderLine />
              <br />
              <TitleTag>STUDIO MANAGER + STAFF ENGINEER</TitleTag>
            </Text>
          </Div>
          <Div thing={true}>
            <Text>
              <p>
                Anne-Marie has been an engineer and studio manager for East Bay
                Recorders since the summer of 2016. There, she has worked with a
                wide variety of artists including Old Firm Casuals, Charger,
                illexotic, Gang of Thieves, Stomper 98, Matt Gage, The Damn
                Liars, John Lester, Karney, and Ghost Town Rebellion. In 2017
                she interned at Outland Studio, performing engineering and
                postproduction services for artists such as Fine Points,
                Battlehooch, James Williamson and Megan Rose. Anne-Marie is also
                a theatrical sound designer, a freelance live sound engineer,
                and currently edits the Working Class Audio podcast.
              </p>
            </Text>
          </Div>
        </TextWrap>
        <Div>
          <img className="aboutUsImgs" src={AnneMarie} alt="" />
        </Div>
      </Body>
    </AboutUsWrapper>
  );
};

export default AboutUs;
