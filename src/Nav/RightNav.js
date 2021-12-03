import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  padding-right: 40px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #343434;
    position: fixed;
    padding-bottom: 20px;
    padding-top: 20px;
    z-index: 20;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 55px;
    right: -1px;
    height: 55vh;
    width: 300px;
    /* padding-top: 5rem; */
    transition: transform 0.3s ease-in-out;
    a {
      padding-left: 80px;
    }
  }
`;

const NavLinks = styled.h4`
  :hover {
    color: #dd3233;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link
        to="/"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>HOME</NavLinks>
      </Link>
      <Link
        to="/about"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>ABOUT EBR</NavLinks>
      </Link>

      <Link
        to="/gear"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>GEAR</NavLinks>
      </Link>

      <Link
        to="/scene"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>THE SCENE</NavLinks>
      </Link>

      <Link
        to="/blog"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>BLOG</NavLinks>
      </Link>

      <Link
        to="/contact"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <NavLinks>CONTACT</NavLinks>
      </Link>
    </Ul>
  );
};

export default RightNav;
