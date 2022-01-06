import React from "react";
import AboutMain from "../../assets/AboutMain.jpeg";
import logo_ebr from "../../assets/logo_ebr.png";
import {
  JumboContainer,
  JumboHeader,
  JumboTitle,
  Underline,
  HeaderPic,
  NameContainer,
} from "../../BlogHome/BlogHome";

const Header = () => {
  return (
    <JumboContainer>
      <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
        <JumboHeader src={logo_ebr} />
      </div>
      <HeaderPic>
        <img style={{ width: "100%" }} src={AboutMain} alt="" />
        <NameContainer>
          <JumboTitle>
            <h1 style={{ marginBottom: "10px" }}>ABOUT EBR</h1>
            <Underline />
          </JumboTitle>
        </NameContainer>
      </HeaderPic>
    </JumboContainer>
  );
};

export default Header;
