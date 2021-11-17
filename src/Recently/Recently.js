import React from "react";
import styled from "styled-components";
import Charger_ebr from "../assets/Charger_ebr.jpeg";
import GHB_Momentum from "../assets/GBH_Momentum_ebr.jpeg";
import tdl_ebr from "../assets/tdl_ebr.jpeg";
import TheOldFirmCasuals_ebr from "../assets/TheOldFirmCasuals_ebr.jpeg";

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
  padding-bottom: 2rem;
  display: flex;
`;

const Header = styled.h1`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem;
`;

const Recently = () => {
  return (
    <Container>
      <Header>Recently @ EBR</Header>
      <AlbumsContainer>
        <div style={{ width: "25%" }}>
          <img style={{ width: "100%" }} src={Charger_ebr} alt="Charger" />
        </div>
        <div style={{ width: "25%" }}>
          <img
            style={{ width: "100%" }}
            src={TheOldFirmCasuals_ebr}
            alt="The Old Firm Casuals - Holger Danske"
          />
        </div>
        <div style={{ width: "25%" }}>
          <img
            style={{ width: "100%" }}
            src={tdl_ebr}
            alt="The Damn Liars - American Ghost Town"
          />
        </div>
        <div style={{ width: "25%" }}>
          <img
            style={{ width: "100%" }}
            src={GHB_Momentum}
            alt="GHB - Momentum"
          />
        </div>
      </AlbumsContainer>
    </Container>
  );
};

export default Recently;
