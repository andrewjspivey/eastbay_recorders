import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  background-color: #343434;
  color: white;
  position: fixed;
  top: 0;
  z-index: 20000;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding-left: 2rem;
    color: #dd3233;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link
          to="/"
          style={{
            color: "whitesmoke",
            textDecoration: "none",
          }}
        >
          <h4>EAST BAY RECORDERS</h4>
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
