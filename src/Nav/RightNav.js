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
    z-index: 20;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 55px;
    right: 0;
    height: 55vh;
    width: 300px;
    /* padding-top: 5rem; */
    transition: transform 0.3s ease-in-out;
    a {
      padding-left: 50px;
    }
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
        <h4>HOME</h4>
      </Link>
      <Link
        to="/about"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <h4>ABOUT EBR</h4>
      </Link>

      <Link
        to="/gear"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <h4>GEAR</h4>
      </Link>

      <Link
        to="/scene"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <h4>THE SCENE</h4>
      </Link>

      <Link
        to="/blog"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <h4>BLOG</h4>
      </Link>

      <Link
        to="/contact"
        style={{
          color: "whitesmoke",
          textDecoration: "none",
        }}
      >
        <h4>CONTACT</h4>
      </Link>
    </Ul>
  );
};

export default RightNav;