import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.form`
  width: 100%;
  text-align: center;
`;

const ContactGroup = styled.div`
  margin: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const NameInputGroup = styled.input`
  width: 60%;
  font-weight: bold;
  height: 30px;
  margin: 1rem;
  border: 1px solid black;
`;

const CategoryGroup = styled.select`
  width: 60%;
  font-weight: bold;
  height: 30px;
  margin: 1rem;
`;

const MessageGroup = styled.textarea`
  width: 60%;
  font-weight: bold;
  height: 30px;
  margin: 1rem;
`;

const ContactButton = styled.button`
  padding: 10px 30px;
  background-color: #DD3233;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const ContactSheet = () => {
  return (
    <div>
      <ContactWrapper
        action='https://formsubmit.co/your@email.com'
        method='POST'>
        <ContactGroup>
          <NameInputGroup type='name' id='name' placeholder='*FIRST NAME AND LAST NAME' />
          <NameInputGroup type='email' id='email' placeholder='*EMAIL' />
          <CategoryGroup>
            <option value='Questions' selected>
              QUESTIONS
            </option>
            <option value='Comments'>COMMENTS</option>
          </CategoryGroup>
          <MessageGroup
            name=''
            id='message'
            rows='3'
            placeholder='*MESSAGE'></MessageGroup>
        </ContactGroup>
        <ContactButton type='submit'>Submit</ContactButton>
      </ContactWrapper>
    </div>
  );
}

export default ContactSheet
