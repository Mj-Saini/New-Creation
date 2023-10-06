import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/common/Footer";
import OurTeam from "./components/OurTeam";
import TeamLeader from "./components/TeamLeader";

const AppRoutes = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <TeamLeader />
      <OurTeam />
      {/* <Footer /> */}
    </>
  );
};

export default AppRoutes;
