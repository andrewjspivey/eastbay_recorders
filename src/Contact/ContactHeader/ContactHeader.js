import React from "react";
import {
  JumboContainer,
  JumboHeader,
  JumboTitle,
  Underline,
  HeaderPic,
  NameContainer,
} from "../../BlogHome/BlogHome";
import logo_ebr from "../../assets/logo_ebr.png";
import Mic_contactpage from "../../assets/Mic_contactpage.jpeg";

const ContactHeader = () => {
  return (
    <JumboContainer>
      <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
        <JumboHeader src={logo_ebr} />
      </div>
      <HeaderPic>
        <img style={{ width: "100%" }} src={Mic_contactpage} alt="" />
        <NameContainer>
          <JumboTitle>
            <h1 style={{ marginBottom: "10px" }}>CONTACT</h1>
            <Underline />
          </JumboTitle>
        </NameContainer>
      </HeaderPic>
    </JumboContainer>
  );
};

export default ContactHeader;
