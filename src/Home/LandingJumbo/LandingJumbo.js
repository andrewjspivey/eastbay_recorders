import React from "react";
import styled, { keyframes } from "styled-components";
import slider_ebr from "../../assets/slider_ebr.png";
import logo_ebr from "../../assets/logo_ebr.png";

const bannerMove = keyframes`
  0% { transform: translateX(0)}
  100% {transform: translateX(-50%)}
`;

const InfiniteJumbo = styled.div`
  display: flex;
  width: 200%;
  animation: ${bannerMove} 35s linear infinite;
`;

const JumboContainer = styled.header`
  width: 100%;
  height: auto;
  padding-top: 50px;
  overflow: hidden;
  position: relative;
  @media (max-width: 481px) {
    height: 30vh;
  }
`;

const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
  background-color: #dd3233;
  @media (max-width: 768px) {
    width: 300%;
  }
  @media (max-width: 481px) {
    width: 400%;
  }
`;
const JumboHeaderContainer = styled.div`
  position: absolute;
  padding: 2rem 0rem 0rem 3rem;
  @media (max-width: 768px) {
    padding: 1rem 0rem 0rem 2rem;
  }
  @media (max-width: 481px) {
    padding: 1rem 0rem 0rem 1rem;
  }
`;

const LandingJumbo = () => {
  return (
    <JumboContainer>
      <JumboHeaderContainer>
        <JumboHeader src={logo_ebr} />
      </JumboHeaderContainer>
      <InfiniteJumbo>
        <img style={{ width: "100%" }} src={slider_ebr} alt="" />
      </InfiniteJumbo>
    </JumboContainer>
  );
};

export default LandingJumbo;
