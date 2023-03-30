import React from "react";
import styled from "styled-components";
import ContactSheet from "../ContactSheet/ContactSheet";

const Container = styled.header`
  width: 100%;
  /* height: 70vh; */
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 2rem;
  /* @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 481px) {
    margin-bottom: 3rem;
    height: 110vh;
  }
  @media (max-width: 320px) {
    height: 115vh;
  } */
`;

const ContactText = styled.div`
  font-size: 20px;
  display: flex;
  width: 75%;
  flex-flow: column;
  align-items: center;
  text-align: center;
  font-family: "Gotham";
  margin-top: 1rem;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 481px) {
    font-size: 10px;
  }
`;

const ContactLocation = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
const ContentHeader = styled.h2`
  font-family: "Gotham";
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 30px;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    line-height: 25px;
  }
`;

const ContactBody = () => {
  return (
    <Container>
      <ContactText>
        <ContentHeader>
          READY TO MAKE SOME MUSIC? LET'S DO IT! SEND US AN EMAIL OR REACH OUT
          TO US ON SOCIAL MEDIA. CAN'T WAIT TO HEAR FROM YOU.
        </ContentHeader>
      </ContactText>
      <ContactLocation>
        <ContactSheet />
      </ContactLocation>
    </Container>
  );
};

export default ContactBody;
