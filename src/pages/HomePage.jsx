import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Recent from "../Components/Recent";

const HomePage = () => {
  return (
    <>
      <Hero id="home" />
      <Services id="services" />
      <Recent id="projects" />
    </>
  );
};

export default HomePage;
