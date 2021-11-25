import React from "react";
import styled from "styled-components";
import Urbano_ebr from "../../assets/Urbano_ebr.jpeg";
import white_ebr from "../../assets/white_ebr.jpeg";
import DePrato_ebr from "../../assets/DePrato_ebr.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const ContentHeader = styled.h1`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2.5em;
  @media (max-width: 354px) {
    font-size: 2em;
  } ;
`;

const RegularsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  } ;
`;

const Regular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-width: 33%;
  max-width: 34%; */
  width: 33%;
  position: relative;
  height: 30rem;
  @media (max-width: 768px) {
    height: 20rem;
    width: 90%;
  }
`;

const RegularHeader = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  display: flex;
  transform: translateY(2rem);
  width: 90%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ViewMore = styled.div`
  width: 50%;
  height: 35px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  align-items: center;
  background-color: #dd3233;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 612px) {
    width: 60%;
  }
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
          <RegularHeader>
            <h1 style={{ margin: "0" }}>MICHAEL</h1>
            <h1 style={{ margin: "0" }}>URBANO</h1>
            <h3>Drums + Percussion</h3>
            <ViewMore>
              <Link
                to="/producer/1"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <h4 style={{ margin: "0" }}>VIEW MORE</h4>
              </Link>
            </ViewMore>
          </RegularHeader>
          <RegularImage src={Urbano_ebr} alt="" />
        </Regular>
        <Regular>
          <RegularHeader>
            <h1 style={{ margin: "0" }}>JAMES</h1>
            <h1 style={{ margin: "0" }}>DePRATO</h1>
            <h3>Guitar</h3>
            <ViewMore>
              <Link
                to="/producer/3"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <h4 style={{ margin: "0" }}>VIEW MORE</h4>
              </Link>
            </ViewMore>
          </RegularHeader>
          <RegularImage src={DePrato_ebr} alt="" />
        </Regular>
        <Regular>
          <RegularHeader>
            <h1 style={{ margin: "0" }}>KEVIN</h1>
            <h1 style={{ margin: "0" }}>WHITE</h1>
            <h3>Bass</h3>
            <ViewMore>
              <Link
                to="/producer/2"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <h4 style={{ margin: "0" }}>VIEW MORE</h4>
              </Link>
            </ViewMore>
          </RegularHeader>
          <RegularImage src={white_ebr} alt="" />
        </Regular>
      </RegularsWrapper>
    </Container>
  );
};

export default Regulars;
