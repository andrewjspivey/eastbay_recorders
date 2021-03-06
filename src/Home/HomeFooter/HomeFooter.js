import React from "react";
import styled from "styled-components";
import ebr_record_logo from "../../assets/ebr_record_logo.png";
import { SocialIcon } from "react-social-icons";
import { AiOutlineMail } from "react-icons/ai";

const Footer = styled.div`
  width: 100%;
  height: 30rem;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const Social = styled.div`
  width: 20%;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const HomeFooter = () => {
  return (
    <Footer>
      <div>
        <img src={ebr_record_logo} alt="" />
      </div>
      <Social>
        <SocialIcon url="https://www.facebook.com/EastBayRecorders/" />
        <a href="mailto:michaelsrosen@comcast.net">
          <AiOutlineMail style={{ fontSize: "50px", color: "#dd3233" }} />
        </a>
        <SocialIcon url="https://www.instagram.com/eastbayrecorders/" />
      </Social>
    </Footer>
  );
};

export default HomeFooter;
