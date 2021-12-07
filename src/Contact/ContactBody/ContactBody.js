import React from 'react'
import styled from 'styled-components'
import ContactSheet from '../ContactSheet/ContactSheet'

const Container = styled.header`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom:1rem;
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 481px) {
    margin-bottom: 3rem;
  }
`;

const ContactText = styled.div`
  font-size: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  font-family: 'Gotham';
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

const ContactBody = () => {
  return (
    <Container>
      <ContactText>
        <h1 style={{ width: '60%' }}>
          READY TO MAKE SOME MUSIC? LET'S DO IT! SEND US AN EMAIL OR REACH OUT
          TO US ON SOCIAL MEDIA. CAN'T WAIT TO HEAR YOU.
        </h1>
      </ContactText>
        <ContactSheet />
    </Container>
  );
}

export default ContactBody