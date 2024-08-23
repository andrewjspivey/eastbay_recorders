import React from "react";
import Michael_working_at_desk from "../../assets/Michael_working_at_desk.jpg";
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
        <img style={{ width: "100%" }} src={Michael_working_at_desk} alt="" />
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
