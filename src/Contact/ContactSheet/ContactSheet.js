import React from "react";
import styled from "styled-components";

const ContactBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

const ContactFormWrapper = styled.div`
  width: 45%;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LocationBody = styled.div`
  width: 40%;
  @media (max-width: 768px) {
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
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 481px) {
  }
`;

const Break = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;

const ContactSheet = () => {
  const mapSource =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7635986112073!2d-122.29513974827702!3d37.819005879652025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857f298add4a63%3A0xde61e4f266f0263f!2sEast%20Bay%20Recorders!5e0!3m2!1sen!2sus!4v1638905614670!5m2!1sen!2sus";
  const formSource =
    "https://812c3618.sibforms.com/serve/MUIEAEuEtib3DDPg4Eef0G1WU5UHCzOb-Knd0R4rl9QIvcvTxT3RkwS2Ceq5lPKbnQD6s0sYpe6mjf-fZugo68Q_yiV7uj8tkPzMqYLe4QsLBqwDnhHavnjsJ-Ui0MVsGx2lMyJfxwUbBwbUFnKUgbxG7j0JEuIatnFpyyTLDXRtQ_QLocNsEyEujtfuB8KJEowTj_F9POrjBq-e";
  return (
    <ContactBody>
      <ContactFormWrapper>
        <iframe
          title="contact-form"
          width="540"
          height="500"
          src={formSource}
          frameBorder="0"
          allowFullScreen
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
          }}
        ></iframe>
      </ContactFormWrapper>
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
            src={mapSource}
            width="100%"
            height="300"
          />
        </LocationText>
      </LocationBody>
    </ContactBody>
  );
};

export default ContactSheet;
