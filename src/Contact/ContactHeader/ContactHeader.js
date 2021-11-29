import React from 'react'
import styled from 'styled-components'
import logo_ebr from '../../assets/logo_ebr.png'
import Microphones from '../../assets/Microphones.jpeg'

const ContactContainer = styled.header`
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
  position: relative;
  height: 40vh;
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

`

const ContactHeader = () => {
  return (
    <ContactContainer>
      <div
        style={{
          position: 'absolute',
          padding: '2rem 0 0 3rem',
        }}>
        <ContactHead src={logo_ebr} />
      </div>
      <ContactLogo>
        <img style={{ width: '100%' }} src={Microphones} alt='' />
      </ContactLogo>
    </ContactContainer>
  );
}

export default ContactHeader
