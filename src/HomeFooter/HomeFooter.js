import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ebr_record_logo from "../assets/ebr_record_logo.png";

const Footer = styled.div`
  width: 100%;
  height: 30rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Social = styled.div``;

const HomeFooter = () => {
  const [links, setLinks] = useState({ facebook: "", instagram: "" });

  useEffect(() => {
    const facebookLink = "https://www.facebook.com/EastBayRecorders/";
    const instagramLink = "https://www.instagram.com/eastbayrecorders/";
    setLinks({ facebook: facebookLink, instagram: instagramLink });
  }, []);

  return (
    <Footer>
      <div>
        <img src={ebr_record_logo} alt="" />
      </div>
      <Social></Social>
      <div>
        <a href="https://www.facebook.com/EastBayRecorders/">FACEBOOK</a>

        <a href="https://www.instagram.com/eastbayrecorders/">INSTAGRAM</a>
      </div>
    </Footer>
  );
};

export default HomeFooter;
