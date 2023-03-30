import React from "react";
import styled from "styled-components";

const ContactBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 481px) {
    flex-flow: column;
    align-items: center;
  }
`;

const ContactWrapper = styled.form`
  width: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 481px) {
    width: 80%;
  }
`;

const ContactGroup = styled.div`
  margin-top: 2rem;
`;

const NameInputGroup = styled.input`
  width: 98%;
  font-weight: bold;
  height: 30px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Gotham";
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 481px) {
    margin-top: 0;
  }
`;

const CategoryGroup = styled.select`
  width: 98%;
  font-weight: bold;
  color: #7b7b7b;
  height: 35px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Gotham";
`;

const MessageGroup = styled.textarea`
  width: 98%;
  font-weight: bold;
  height: 60px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Gotham";
`;

const ContactButton = styled.button`
  padding: 10px 30px;
  background-color: #dd3233;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const LocationBody = styled.div`
  width: 40%;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 481px) {
    width: 80%;
  }
`;

const LocationText = styled.div`
  width: 100%;
  font-size: 10px;
  font-family: "Gotham";
  margin-top: 1rem;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 481px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
  }
`;

const Break = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;

const ContactSheet = () => {
  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7635986112073!2d-122.29513974827702!3d37.819005879652025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857f298add4a63%3A0xde61e4f266f0263f!2sEast%20Bay%20Recorders!5e0!3m2!1sen!2sus!4v1638905614670!5m2!1sen!2sus";
  return (
    <ContactBody>
      <ContactWrapper
        action="https://formsubmit.co/michaelsrosen@comcast.net"
        method="POST"
      >
        <ContactGroup>
          <NameInputGroup type="name" placeholder="*FIRST NAME AND LAST NAME" />
          <NameInputGroup type="email" placeholder="*EMAIL" />
          <NameInputGroup type="phone" placeholder="*PHONE NUMBER" />
          <CategoryGroup>
            <option value="Questions" defaultValue="selected">
              *QUESTIONS
            </option>
            <option value="Comments">*COMMENTS</option>
          </CategoryGroup>
          <MessageGroup name="" placeholder="*MESSAGE"></MessageGroup>
        </ContactGroup>
        <ContactButton type="submit">Submit</ContactButton>
      </ContactWrapper>
      <LocationBody>
        <LocationText>
          <h1>
            1740 W Grand Ave,
            <br /> Oakland, CA 94607
            <br /> (510) 418-5090
          </h1>
          <Break />
          <iframe
            className="maps"
            title="google maps"
            src={source}
            width="100%"
            height="300"
          />
        </LocationText>
      </LocationBody>
    </ContactBody>
  );
};

export default ContactSheet;
