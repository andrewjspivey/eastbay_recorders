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
  justify-content: center;
  align-items: center;
  &:hover {
    img {
      opacity: 0.5;
    }
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
  transform: translateY(5rem);
  background-color: #dd3233;
  &:hover {
    cursor: pointer;
    display: flex;
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 70%;
    display: flex;
    transform: translateY(3rem);
  }
  @media (max-width: 375px) {
    font-size: 0.8rem;
    height: 1.5rem;
  } ;
`;

const Header = styled.h1`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2.5rem;
  margin: 2rem;
`;

const Recently = () => {
  return (
    <Container>
      <Header>Recently @ EBR</Header>
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
        </Album>
      </AlbumsContainer>
    </Container>
  );
};

export default Recently;
