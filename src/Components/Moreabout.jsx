import React from "react";
import banner2 from "../Images/banner-bg-2.png";
import imageconstruction from "../Images/electperson.jpg";
import rightarrow from "../Images/arrowright.png";
import checkcorrect from "../Images/check.png";
import "../Styles/moreabout.css";
import svg1 from "../Images/expertise-item-1.svg";

const Moreabout = () => {
  return (
    <div className="more-about">
      <div className="data-background">
        <div className="container">
          <div className="breadcrumb-content">
            <div className="row">
              <div className="box-mau">
                <h2 className="sas">About Us</h2>
              </div>
            </div>
            <div className="ded">
              <ul className="ded-ul">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <img className="arrow-right" src={rightarrow} alt="" />
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="elect-box-1">
        <img className="elect-image-1" src={imageconstruction} alt="" />
        <div className="elect-text-1">
          <h1 className="title-549">Electrical Wiring</h1>
          <h5></h5>
          <p className="p-elect-1">Planing, Real Estate</p>
          <p className="p-elect-2">
            In compliance with the stringent Lebanese Standards (Libnor)
          </p>
          <div className="flexy-1">
            <h2 className="title-elect-1">Big Project</h2>
            <p className="p-elect-3">Types of Wiring Commonly Used</p>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">PVC Insulated Cables</p>
            </div>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">Rubber Cables</p>
            </div>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">EPR Cables </p>
            </div>
            <button className="request-service">Request service</button>
          </div>
        </div>
      </div>
      <div className="expertise-style">
        <div className="expertise-big-box">
          <h3 className="expertise-style-h3-1">Your Vision Our Expertise</h3>
          <p className="expertise-style-p-1 ">
            {" "}
            For over a decade, our Lebanon-based company has led the industry in
            electrical wiring solutions. With a proven track record of
            excellence, we specialize in safe, efficient installations for
            residential and commercial properties. Our skilled team ensures
            reliable power distribution, integrating cutting-edge technology for
            sustainable and secure electrical systems
          </p>
          <div className="expertise-flex-1">
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Power Lines</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Circuit Masters</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">02</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Wiring Works</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">03</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Spark Solutions</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">04</p>
            </div>
          </div>
          <p className="expertise-style-p-4">
            Experience excellence in plumbing solutions with our dedicated team.
            From installations to repairs, we deliver reliable service, ensuring
            efficient water systems for homes and businesses in Lebanon
          </p>
        </div>
        <h3></h3>
        <p></p>
      </div>
      <img className="image-second" src={imageconstruction} alt="" />
    </div>
  );
};

export default Moreabout;
