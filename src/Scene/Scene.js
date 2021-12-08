import React from "react";
import styled from "styled-components";
import logo_ebr from "../assets/logo_ebr.png";
import theScene_3 from "../assets/theScene_3.jpeg";
import thescene_1 from "../assets/thescene_1.jpeg";
import theScene_2 from "../assets/theScene_2.jpeg";
import theScene_4 from "../assets/theScene_4.jpeg";
import theScene_5 from "../assets/theScene_5.jpeg";
import theScene_6 from "../assets/theScene_6.jpeg";
import theScene_7 from "../assets/theScene_7.jpeg";
import theScene_8 from "../assets/theScene_8.jpeg";
import theScene_9 from "../assets/theScene_9.jpeg";

const HeaderPic = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const JumboContainer = styled.header`
  width: 100%;
  padding-top: 50px;
  top: 0;
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
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
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
const GalleryContainer = styled.div`
  margin: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContent = styled.div`
  width: 80%;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
const StyledGrid = styled.div`
  line-height: 1.1;
  -webkit-column-count: 4;
  -webkit-column-gap: 10px;
  -moz-column-count: 4;
  -moz-column-gap: 10px;
  column-count: 4;
  column-gap: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Scene = () => {
  const imgArray = [
    thescene_1,
    theScene_2,
    theScene_3,
    theScene_4,
    theScene_5,
    theScene_6,
    theScene_7,
    theScene_8,
    theScene_9,
  ];
  return (
    <div>
      <JumboContainer>
        <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
          <JumboHeader src={logo_ebr} />
        </div>
        <HeaderPic>
          <img style={{ width: "100%" }} src={theScene_7} alt="" />
          <NameContainer>
            <JumboTitle>
              <h1 style={{ marginBottom: "10px" }}>THE SCENE</h1>
              <Underline />
            </JumboTitle>
          </NameContainer>
        </HeaderPic>
      </JumboContainer>
      <GalleryContainer>
        <TextContent>
          <h3>
            FEELS LIKE THERE'S ALWAYS SOMETHING SPECIAL HAPPENING AT EBR. HERE
            IS A BEHIND THE SCENES LOOK AT SOME OF OUR RECORDING DATES AND
            PHOTOS FROM MICHAEL ROSEN'S HISTORY.
          </h3>
        </TextContent>
        <StyledGrid>
          {imgArray.map((pic, index) => (
            <div key={index}>
              <img style={{ width: "100%" }} src={pic} alt="" />
            </div>
          ))}
        </StyledGrid>
      </GalleryContainer>
    </div>
  );
};

export default Scene;
