import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { producers } from "../data/producerData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 55px;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const HeaderContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 3.5rem;
  @media (max-width: 768px) {
    line-height: 2.5rem;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProdName = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  align-self: center;
  margin-bottom: -5px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Skills = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  align-self: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const PicContainer = styled.div`
  width: 50%;
  margin: 2rem 0rem 3rem 0rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const BlogImage = styled.img`
  width: 100%;
`;

const Underline = styled.div`
  height: 3px;
  width: 5rem;
  background-color: black;
  @media (max-width: 768px) {
    height: 2px;
  }
`;

const ProducerPage = () => {
  const [producer, setProducer] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const producerInfo = producers.find((p) => p.id === id);
    setProducer(producerInfo);
  }, []);
  return (
    <Container>
      {producer ? (
        <ContentContainer>
          <HeaderContainer>
            <NameContainer>
              <ProdName>{producer.name}</ProdName>
              <Underline />
            </NameContainer>
            <Skills>{producer.skills}</Skills>
          </HeaderContainer>
          <div style={{ lineHeight: "2rem", width: "80%" }}>
            {producer.story}
          </div>
          <PicContainer>
            <BlogImage src={producer.pic} alt="" />
          </PicContainer>
        </ContentContainer>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </Container>
  );
};

export default ProducerPage;
