import React from "react";
import "./AboutUs.css";
import styled from "styled-components";
import MichaelLookingDown from "../../assets/MichealLookingDown.jpeg";
import AnneMarie from "../../assets/AnneMarie.jpeg";
import Dak from "../../assets/Dak.jpg";
import AJ_Bio_About from "../../assets/AJ_Bio_About.jpg";

const AboutUsWrapper = styled.div`
  background-color: #626362;
  color: white;
  font-size: 14px;
  line-height: 25px;
  padding: 100px 100px 100px 100px;
  @media (max-width: 950px) {
    padding: 100px 100px 50px 100px;
  }
  @media (max-width: 840px) {
    display: block;
    padding: 50px 100px;
  }
  @media (max-width: 600px) {
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
  /* width: 100%; */
  margin: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 840px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 2rem 0rem 4rem 0rem;
  }
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

  @media (max-width: 840px) {
    width: 100%;
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
        <Div>
          <Text>
            <NameTag>MICHAEL ROSEN</NameTag>
            <br />
            <UnderLine />
            <br />
            <TitleTag>PRODUCER/ENGINEER</TitleTag>
            <div style={{ padding: "15px 25px 15px 15px" }}>
              <p>
                Michael Rosen is East Bay Recorder's owner/bottle washer/fuse
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
                The first band he watched record was Booker T. and the M.G.'s.
                The vibe was electric, and Michael found a home
              </p>
              <p>
                His first paying gig was at The Automatt in San Francisco, one
                of the hottest studios at the time. He went from errand engineer
                to assistant to engineer. He bounced to Fantasy Studios in
                Berkeley, and then he struck out on his own
              </p>
              <p className="lastMichaelAboutMePTag">
                Rosen's credit list features dozens of punk, rock, metal, and
                (yes) even a country record. He's worked with Rancid, AFI, Less
                Than Jake, Lars Fredrickson and The Bastards, Green Day,
                Journey, Tesla, Todd Rundgren, The Old Firm Casuals, Santana,
                Papa Roach, Cock Sparrer, Greg Kihn, Testament, Vicious Rumors,
                Death Angel, Forbidden, Violence, and dozens more.
              </p>
            </div>
          </Text>
        </Div>
        <Div>
          <img className="aboutUsImgs" src={MichaelLookingDown} alt="" />
        </Div>
      </Body>
      <Body>
        <Div>
          <Text>
            <NameTag>ANNE-MARIE-PLEAU</NameTag>
            <br />
            <UnderLine />
            <br />
            <TitleTag>ENGINEER</TitleTag>
            <div style={{ padding: "15px 25px 15px 15px" }}>
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
            </div>
          </Text>
        </Div>

        <Div>
          <img className="aboutUsImgs" src={AnneMarie} alt="" />
        </Div>
      </Body>
      <Body>
        <Div>
          <Text>
            <NameTag>DAKARE DIXON-ESSIEN</NameTag>
            <br />
            <UnderLine />
            <br />
            <TitleTag>ENGINEER</TitleTag>
            <div style={{ padding: "15px 25px 15px 15px" }}>
              <p>
                Dakare Dixon-Essien is an audio engineer professional who has
                worked on projects doing both, production and postproduction
                work. He specializes working in R&B, Hip Hop, and Rock and Roll
                genres. His work history includes operating as the live sound
                engineer for the Helen Street Mixer, the audio engineer for
                Creekside Community Church, and audio and mixing engineer for
                the BOOTSTRAPS Podcast, as well as commercials for 30First
                Clothing Company. He has long had a passion for exploring and
                shaping sounds and has brought that passion with him to East Bay
                Recorders.
              </p>
            </div>
          </Text>
        </Div>

        <Div>
          <img className="aboutUsImgs" id="dak" src={Dak} alt="" />
        </Div>
      </Body>
      <Body>
        <Div>
          <Text>
            <NameTag>AJ Hicks</NameTag>
            <br />
            <UnderLine />
            <br />
            <TitleTag>ENGINEER</TitleTag>
            <div style={{ padding: "15px 25px 15px 15px" }}>
              <p>
                AJ Hicks is an engineer and musician with a focus on full band
                and live recordings. AJ has a strong musical knowledge as a
                guitar player and vocalist. He’s been composing, recording, and
                producing music from a young age. He knows what it takes to find
                that perfect note and the importance of a positive creative
                environment to do so. AJ will follow your lead while making sure
                your session stays on track so all of your focus can be on
                creativity. AJ has experience working on a variety of styles and
                projects ranging from entire albums to quick vocal or
                instrumental overdubs. So whether it’s the recording of a song,
                question about a note, or a cup of coffee to get you through
                your session, AJ has your studio needs covered.
              </p>
            </div>
          </Text>
        </Div>

        <Div>
          <img className="aboutUsImgs" src={AJ_Bio_About} alt="" />
        </Div>
      </Body>
    </AboutUsWrapper>
  );
};

export default AboutUs;
