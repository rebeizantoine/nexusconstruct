import React from "react";
import "../Styles/hero.css";
import imageright from "../Images/image-1.png";
import imageleft from "../Images/image-2.png";
import doublearrows from "../Images/doublearrowleft.png";

const Hero = () => {
  // Function to handle scrolling to services section
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling animation
        block: "start", // Scroll to the top of the section
        inline: "nearest", // Scroll to the nearest edge of the section
      });
    }
  };
  return (
    <div>
      <div className="all-boxes">
        <div className="big-box-1">
          <div className="left-text">
            <p>SMART SOLUTIONS</p>
            <h2>Building the spaces where memories are made</h2>
            <div className="read-more-box">
              {/* Add onClick event to scroll to services */}
              <button
                className="button-read-more"
                onClick={handleScrollToServices}
              >
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
          <div className="right-image">
            <img src={imageright} alt="" />
          </div>
        </div>
        <div className="big-box-2">
          <div className="left-box-2">
            <img src={imageleft} alt="" />
          </div>
          <div className="right-box-2">
            <p className="para-1">ABOUT US</p>
            <h3 className="h3-box-2-1">
              Transforming Spaces Creating Memories
            </h3>
            <h5 className="h5-box-2-1">
              Nexus Construct is a Lebanese company founded in 2015. dedicated
              to planning,designing and constructing, With a commitment to
              excellence, and best prices.
            </h5>
            <div className="small-box-123">
              <div className="h5-title-1">
                <h2 className="h2-box-2-2">
                  {" "}
                  <div className="doubarr">
                    <img className="double-arrows" src={doublearrows} alt="" />
                  </div>
                  Designing your present
                </h2>
              </div>
              <p className="p-box-2-2">
                Elevate your present with our innovative approach to interior
                and architectural design solutions merging modern aesthetics
                with timeless elegance.
              </p>
            </div>
            <div className="small-box-1234">
              <div className="h5-title-1">
                <h2 className="h2-box-2-2">
                  {" "}
                  <div className="doubarr">
                    <img className="double-arrows" src={doublearrows} alt="" />
                  </div>
                  Constructing your future
                </h2>
              </div>
              <p className="p-box-2-2">
                Build your dreams with us, where precision meets passion. From
                concept to completion, we create enduring structures that shape
                tomorrow's skyline with excellence and vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
