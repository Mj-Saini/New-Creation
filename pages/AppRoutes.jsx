import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/common/Footer";
import OurTeam from "./components/OurTeam";

const AppRoutes = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AppRoutes;
