import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Charger_ebr from "../../assets/Charger_ebr.jpeg";
import GHB_Momentum from "../../assets/GBH_Momentum_ebr.jpeg";
import tdl_ebr from "../../assets/tdl_ebr.jpeg";
import TheOldFirmCasuals_ebr from "../../assets/TheOldFirmCasuals_ebr.jpeg";

const Container = styled.div`
  width: 100%;
  background-color: #dd3233;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0rem;
  @media (max-width: 768px) {
    padding: 0.5rem 0 2rem 0;
  }
`;

const AlbumsContainer = styled.div`
  width: 90%;
  margin: 2rem;
  padding-bottom: 4rem;
  display: flex;
  @media (max-width: 768px) {
    flex-flow: row wrap;
  }
`;
const Album = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    z-index: 1;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const ViewMore = styled.div`
  width: 50%;
  height: 2rem;
  position: absolute;
  border: 2px solid white;
  display: none;
  justify-content: center;
  opacity: 0.9;
  align-items: center;
  /* transform: translateY(5rem); */
  background-color: #dd3233;
  &:hover {
    cursor: pointer;
    display: flex;
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 70%;
    display: flex;
    transform: translateY(10rem);
  }
  @media (max-width: 481px) {
    font-size: 0.8rem;
    height: 1.5rem;
    transform: translateY(5rem);
  } ;
`;

const Header = styled.h1`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0rem 0.5rem 0rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const AlbumTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem 0rem 0rem;
  line-height: 1rem;
  text-align: center;
  width: 80%;
  font-family: "Gotham";
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0rem 0rem 0rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const BandName = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 1rem 0rem 0rem 0rem; */
  text-align: center;
  line-height: 1rem;
  width: 80%;
  font-family: "Gotham";
  font-size: 0.9rem;
  font-weight: 400;
  margin: 1rem 0rem 0rem 0rem;
  @media (max-width: 768px) {
    display: none;
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
  align-items: center;
  z-index: 2;
  display: flex;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    /* align-items: center; */
  }
`;

const Recently = () => {
  return (
    <Container>
      <NameContainer>
        <Header>RECENTLY @ EBR</Header>
        <Underline />
      </NameContainer>
      <AlbumsContainer>
        <Album>
          <ViewMore>
            <h3 style={{ color: "white" }}>View Album</h3>
          </ViewMore>
          <Link to="/album/3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={Charger_ebr}
              alt="Charger"
            />
          </Link>
          <AlbumTitle>Charger</AlbumTitle>
          <BandName>Charger</BandName>
        </Album>
        <Album>
          <ViewMore>
            <h3 style={{ color: "white" }}>View Album</h3>
          </ViewMore>
          <Link to="/album/4">
            <img
              style={{ width: "100%", height: "100%" }}
              src={TheOldFirmCasuals_ebr}
              alt="The Old Firm Casuals - Holger Danske"
            />
          </Link>
          <AlbumTitle>Holger Danske</AlbumTitle>
          <BandName>The Old Firm Casuals</BandName>
        </Album>
        <Album>
          <ViewMore>
            <h3 style={{ color: "white" }}>View Album</h3>
          </ViewMore>
          <Link to="/album/2">
            <img
              style={{ width: "100%", height: "100%" }}
              src={tdl_ebr}
              alt="The Damn Liars - American Ghost Town"
            />
          </Link>
          <AlbumTitle>American Ghost Town</AlbumTitle>
          <BandName>The Damn Liars</BandName>
        </Album>
        <Album>
          <ViewMore>
            <h3 style={{ color: "white" }}>View Album</h3>
          </ViewMore>
          <Link to="/album/1">
            <img
              style={{ width: "100%", height: "100%" }}
              src={GHB_Momentum}
              alt="GHB - Momentum"
            />
          </Link>
          <AlbumTitle>Momentum</AlbumTitle>
          <BandName>GHB</BandName>
        </Album>
      </AlbumsContainer>
    </Container>
  );
};

export default Recently;
