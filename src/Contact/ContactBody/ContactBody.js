import React from 'react'
import styled from 'styled-components'
import ContactSheet from '../ContactSheet/ContactSheet'

const Container = styled.header`
width: 100%;
height: 50vh;
display: flex;
flex-flow: column;
justify-content: center;
`

const ContactText = styled.div`
font-size: 1rem;
display: flex;
flex-flow: column;
align-items: center;
text-align: center;
font-family: 'Gotham';
`

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
