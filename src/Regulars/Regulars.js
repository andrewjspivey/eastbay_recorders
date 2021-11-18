import React from "react";
import styled from "styled-components";
import Urbano_ebr from "../assets/Urbano_ebr.jpeg";
import white_ebr from "../assets/white_ebr.jpeg";
import DePrato_ebr from "../assets/DePrato_ebr.jpeg";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ContentHeader = styled.h1`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2.5em;
`;

const RegularsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Regular = styled.div`
  display: flex;
  justify-content: center;
  min-width: 33%;
  max-width: 34%;
  height: 30rem;
`;

const RegularImage = styled.img`
  width: 95%;
  min-height: 90%;
  max-height: 90%;
`;

const Regulars = () => {
  return (
    <Container>
      <ContentHeader>THE REGULARS</ContentHeader>
      <RegularsWrapper>
        <Regular>
          <RegularImage src={Urbano_ebr} alt="" />
        </Regular>
        <Regular>
          <RegularImage src={DePrato_ebr} alt="" />
        </Regular>
        <Regular>
          <RegularImage src={white_ebr} alt="" />
        </Regular>
      </RegularsWrapper>
    </Container>
  );
};

export default Regulars;
