import React from 'react'
import styled from 'styled-components'
import logo_ebr from '../../assets/logo_ebr.png'
import Mic_contactpage from '../../assets/Mic_contactpage.jpeg'

const Container = styled.header`
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
  position: relative;
  height: 60vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const ContactHead = styled.img`
  position: absolute;
  z-index: 1;
  background-color: #dd3233;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactLogo = styled.div`
  background-image: url(${Mic_contactpage});
  display: flex;
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ContactText=styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  color: white;
  font-size: 2rem;
  font-family: 'Gotham';
`

const ContactHeader = () => {
  return (
    <Container>
      <ContactText>
        <h1>CONTACT</h1>
      </ContactText>
      <div
        style={{
          position: 'absolute',
          padding: '2rem 0 0 3rem',
        }}>
        <ContactHead src={logo_ebr} />
      </div>
      <ContactLogo />
    </Container>
  );
}

export default ContactHeader
