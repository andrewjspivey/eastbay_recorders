import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
const BurgerContainer = styled.div`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #dd3233;
    border-radius: 10px;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <BurgerContainer open={open}>
          <div className="burger-lines" />
          <div className="burger-lines" />
          <div className="burger-lines" />
        </BurgerContainer>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
