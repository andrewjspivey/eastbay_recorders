import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  padding: 50px;
  @media (max-width: 576px) {
    padding: 25px 30px;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
`;
// const Body = styled.div`
//   font-size: 14px;
//   padding: 25px 50px 50px 50px;
//   display: flex;
//   @media (max-width: 768px) {
//     display: block;
//     padding: 25px 50px 50px 50px;
//   }
//   @media (max-width: 600px) {
//     padding: 10px;
//   }
// `;
// const Paragraph = styled.div`
//   padding: 15px;
//   line-height: 1.5;
//   @media (max-width: 425px) {
//     padding: 0px;
//   }
// `;
const ContentHeader = styled.h2`
  font-family: "Gotham";
  font-weight: normal;
  font-size: 2rem;
  line-height: 40px;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    line-height: 25px;
  }
`;

const Main = () => {
  return (
    <MainWrapper>
      {/* <StyledSpacer /> */}
      <Title>
        <ContentHeader>Meet the Team</ContentHeader>
      </Title>
      {/* <StyledSpacer /> */}
      {/* <Body>
        <Paragraph>
          <p>
            Fifteen years ago, Jon Evans was the first
            producer/engineer/musician to make the space on San Pablo Avenue his
            musical home. In between tour dates with Tori Amos, Linda Perry, and
            Sarah McLachlan he recorded an assortment of bands and composed
            music for movies and television.
          </p>
          <p>
            He handed the keys to renowned musician Steven Emerson, who recorded
            dozens of local jazz heavyweights, and engineer/producer Dale
            Everingham, who recorded an eclectic assortment of artists, such as
            E-40 and Mazzy Star here.
          </p>
          <p>
            The studio was run by a couple of local engineers who recorded local
            punk and hip-hop demos after Emerson and Everingham moved on.
          </p>
          <p>
            In 2012, engineer/producer Michael Rosen and noted musician Michael
            Urbano were looking for a place to work. A friend of a friend turned
            them on to the hidden studio, and it felt right.
          </p>
        </Paragraph>
        <Paragraph>
          <p>
            The duo got to work remodeling the space until Urbano hit the road
            with Italian megastar Luciano Ligabue.
          </p>
          <p>
            Rosen kept going, rebuilding the control room, vocal booths, and iso
            rooms. He added new paint, new baffles, and new equipment. The
            studio has gone from a dead jazz room to a live punk rock space.
          </p>
          <p>
            He also rechristened the studio East Bay Recorders, an homage to his
            musical roots and the analog era that, he says, sounds more real.
          </p>
          <p>
            Legends and up-and-comers have made East Bay Recorders their home.
            In the past five years Rancid, Country Joe McDonald, The Old Firm
            Casuals, Charger, David Lowrey (Camper van Beethoven, Cracker), Lars
            Frederiksen and many local musicians looking to break into the music
            business have worked at EBR.
          </p>
          <p>Come and make your mark.</p>
        </Paragraph>
      </Body> */}
    </MainWrapper>
  );
};

export default Main;
