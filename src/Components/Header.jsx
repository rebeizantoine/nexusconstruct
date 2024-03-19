import React from "react";
import { Helmet } from "react-helmet";
import "../Styles/header.css";
import Phone from "../Images/phone.png";
import whitetry from "../Images/WHITERTRY.PNG";
import { useNavigate } from "react-router-dom";

const Header = ({ scrollToServices }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/");
  };

  const handleScrollToFooter = () => {
    const footerSection = document.getElementById("footer");
    if (footerSection) {
      footerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleScrollToServices = () => {
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 0);
  };

  const handleScrollToProjects = () => {
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 0);
  };

  const handleServicesClick = () => {
    if (scrollToServices) {
      scrollToServices();
    }
  };

  return (
    <div>
      <div className="header-box">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="header-all">
          <div className="header-title">
            <img
              className="steel-city"
              src={whitetry}
              alt=""
              onClick={handleImageClick}
            />
          </div>
          <div className="header-1">
            <nav>
              <ul className="header-ul">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a
                    className="weird-blue"
                    href="/#services"
                    onClick={handleScrollToServices}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="weird-blue"
                    href="/#projects"
                    onClick={handleScrollToProjects}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-2">
            <div className="image-circle">
              <img
                src={Phone}
                className="phone-image"
                alt=""
                onClick={handleScrollToFooter}
              />
            </div>
            <div className="box-near-header">
              <p className="p-header">Need help?</p>
              <h4 className="h4-header">(01) 255-012</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
