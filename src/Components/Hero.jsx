import React from "react";
import "../Styles/hero.css";
import imageright from "../Images/image-1.png";
import imageleft from "../Images/image-2.png";
import doublearrows from "../Images/doublearrowleft.png";
const Hero = () => {
  return (
    <div>
      <div className="all-boxes">
        <div className="big-box-1">
          <div className="left-text">
            <p>SMART SOLUTIONS</p>
            <h2>Building the spaces where memories are made</h2>
            <div className="read-more-box">
              <button className="button-read-more">
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
              It is a long established fact that a reader will be distracted by
              the readablejk content of a page when looking at its layout. Lorem
              Ipsum is simply dummyj
            </h5>
            <div className="small-box-123">
              <div className="h5-title-1">
                <h2 className="h2-box-2-2">
                  {" "}
                  <div className="doubarr">
                    <img className="double-arrows" src={doublearrows} alt="" />
                  </div>
                  Roof Repair
                </h2>
              </div>
              <p className="p-box-2-2">
                It is a long established fact that a reader will distracted by
                the readablejk content of a page when looking at its layout.
              </p>
            </div>
            <div className="small-box-1234">
              <div className="h5-title-1">
                <h2 className="h2-box-2-2">
                  {" "}
                  <div className="doubarr">
                    <img className="double-arrows" src={doublearrows} alt="" />
                  </div>
                  Roof Repair
                </h2>
              </div>
              <p className="p-box-2-2">
                It is a long established fact that a reader will distracted by
                the readablejk content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
