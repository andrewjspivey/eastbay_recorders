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
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const JumboContainer = styled.header`
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
  background-color: #dd3233;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LandingJumbo = () => {
  return (
    <JumboContainer>
      <div
        style={{
          position: "absolute",
          padding: "2rem 0 0 3rem",
        }}
      >
        <JumboHeader src={logo_ebr} />
      </div>
      <InfiniteJumbo>
        <img style={{ width: "100%" }} src={slider_ebr} alt="" />
      </InfiniteJumbo>
    </JumboContainer>
  );
};

export default LandingJumbo;
