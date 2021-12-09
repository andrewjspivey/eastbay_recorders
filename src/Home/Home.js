import React from "react";
import LandingJumbo from "./LandingJumbo/LandingJumbo";
import Intro from "./Intro/Intro";
import Recently from "./Recently/Recently";
import GearIntro from "./GearIntro/GearIntro";
import Regulars from "./Regulars/Regulars";
import HomeFooter from "./HomeFooter/HomeFooter";
import ContactBody from "../Contact/ContactBody/ContactBody";

const Home = () => {
  return (
    <div>
      <LandingJumbo />
      <Intro />
      <Recently />
      <GearIntro />
      <ContactBody />
    </div>
  );
};

export default Home;
