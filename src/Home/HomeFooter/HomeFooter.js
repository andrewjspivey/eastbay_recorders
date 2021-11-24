import React from "react";
import styled from "styled-components";
import ebr_record_logo from "../../assets/ebr_record_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
  width: 40%;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
`;

const HomeFooter = () => {
  return (
    <Footer>
      <div>
        <img src={ebr_record_logo} alt="" />
      </div>
      <Social>
        <a
          style={{ textDecoration: "none", color: "grey" }}
          href="https://www.facebook.com/EastBayRecorders/"
        >
          <h4>
            <FaFacebookF /> FACEBOOK
          </h4>
        </a>
        <a
          style={{ textDecoration: "none", color: "grey" }}
          href="https://www.instagram.com/eastbayrecorders/"
        >
          <h4>
            <FaInstagram /> INSTAGRAM
          </h4>
        </a>
      </Social>
    </Footer>
  );
};

export default HomeFooter;
