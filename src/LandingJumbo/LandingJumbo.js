import React from "react";
import styled, { keyframes } from "styled-components";

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
  overflow: hidden;
  position: relative;
`;

const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
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
        <JumboHeader src="http://eastbayrecorders.com/wp-content/uploads/2016/12/EBR-Word-Mark_white-e1557269084740.png" />
      </div>
      <InfiniteJumbo>
        <img
          style={{ width: "100%" }}
          src="https://eastbayrecorders.com/wp-content/uploads/2016/12/ebr_slider_1500.png"
          alt=""
        />
      </InfiniteJumbo>
    </JumboContainer>
  );
};

export default LandingJumbo;
