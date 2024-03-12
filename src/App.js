import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Recent from "./Components/Recent";
import Footer from "./Components/Footer";
import Moreabout from "./Components/Moreabout";
import Projectview from "./Components/Projectview";
import Moreabout2 from "./Components/Moreabout2";
import Moreabout3 from "./Components/Moreabout3";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projectviewshow from "./Components/Projectviewshow";
import Termsofuse from "./Components/Termsofuse";
import Loading from "./Components/Loading";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, you can replace this with your actual data loading logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds for demonstration

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Router>
        <Header scrollToServices={handleScrollToServices} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <>
                  <Hero id="home" />
                  <Services id="services" />
                  <Recent id="projects" />
                </>
              </>
            }
          />
          <Route
            path="/TermsPolicy"
            element={
              <>
                <Termsofuse />
              </>
            }
          />

          <Route
            path="/Electrical"
            element={
              <>
                <Moreabout />
              </>
            }
          />
          <Route
            path="/projectview"
            element={
              <>
                <Projectview />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Contact />
                <ToastContainer />
              </>
            }
          />
          <Route
            path="/Construction"
            element={
              <>
                <Moreabout2 />
              </>
            }
          />
          <Route
            path="/SolarPanels"
            element={
              <>
                <Moreabout3 />
              </>
            }
          />

          <Route
            path="/projectviewshow/:projectTitle"
            element={
              <>
                <Projectviewshow />
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
