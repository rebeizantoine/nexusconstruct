import React from "react";
import banner2 from "../Images/banner-bg-2.png";
import imageconstruction from "../Images/solar-4.jpg";
import rightarrow from "../Images/arrowright.png";
import checkcorrect from "../Images/check.png";
import "../Styles/moreabout.css";
import svg1 from "../Images/expertise-item-1.svg";

const Moreabout3 = () => {
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
          <h1 className="title-549">Solar Panels</h1>
          <h5></h5>
          <p className="p-elect-1">Planing, Real Estate</p>
          <p className="p-elect-2">
            In compliance with the stringent Lebanese Standards (Libnor)
          </p>
          <div className="flexy-1">
            <h2 className="title-elect-1">Big Project</h2>
            <p className="p-elect-3">More of our services:</p>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">Residential Solar Installation</p>
            </div>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">Commercial Solar Projects</p>
            </div>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">Off-Grid Solar Solutions </p>
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
            Revolutionize your energy consumption with our expert solar panel
            installations in Lebanon. From residential rooftops to commercial
            projects, we harness the power of the sun for sustainable,
            cost-effective electricity solutions. Our team ensures seamless
            integration, maximum efficiency, and long-term savings for every
            client.
          </p>
          <div className="expertise-flex-1">
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Solar Experts</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Green Power</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">02</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Sun Solutions</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">03</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Solar Innovation</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">04</p>
            </div>
          </div>
          <p className="expertise-style-p-4">
            Elevate your energy independence with our trusted solar solutions.
            With a decade of expertise, we deliver top-tier installations for
            lasting sustainability and savings in Lebanon.
          </p>
        </div>
        <h3></h3>
        <p></p>
      </div>
      <img className="image-second" src={imageconstruction} alt="" />
    </div>
  );
};

export default Moreabout3;
