import React from "react";
import imageconstruction from "../Images/solar-1.jpg";
import imageconstruction2 from "../Images/solar-3.jpg";
import imageconstruction3 from "../Images/solar-4.jpg";

import rightarrow from "../Images/arrowright.png";
import checkcorrect from "../Images/check.png";
import "../Styles/moreabout.css";
import svg1 from "../Images/expertise-item-1.svg";

const MoreAbotuSolarPanel = () => {
  return (
    <div className="more-about">
      <div className="data-background">
        <div className="container">
          <div className="breadcrumb-content">
            <div className="row">
              <div className="box-mau">
                <h2 className="sas">Solar Panel Solutions</h2>
              </div>
            </div>

            <div
              className="ded"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.55)",
                padding: "12px 22px",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            >
              <ul
                className="ded-ul"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "white",
                }}
              >
                <li>
                  <a
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <img
                    className="arrow-right"
                    style={{ color: "white" }}
                    src={rightarrow}
                    alt=""
                  />
                </li>

                <li
                  style={{
                    fontSize: "22px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Solar Panels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="elect-box-1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img className="elect-image-1" src={imageconstruction} alt="" />

          <img
            className="elect-image-1"
            src={imageconstruction2}
            alt=""
            style={{
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        <div className="elect-text-1">
          <h1 className="title-549">Solar Energy Solutions</h1>

          <p className="p-elect-1">Renewable Energy, Smart Systems</p>

          <p className="p-elect-2">
            Delivering efficient solar solutions for homes and businesses across
            Lebanon
          </p>

          <div className="flexy-1">
            <h2 className="title-elect-1">Clean Energy</h2>

            <p className="p-elect-3">More of our services:</p>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Rooftop Solar Installation</p>
            </div>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Battery Backup Systems</p>
            </div>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Inverter Integration</p>
            </div>

            <button className="request-service">Request service</button>
          </div>
        </div>
      </div>

      <div className="expertise-style">
        <div className="expertise-big-box">
          <h3 className="expertise-style-h3-1">Sustainable Energy Expertise</h3>

          <p className="expertise-style-p-1 ">
            Our solar panel systems are designed to provide reliable and
            cost-effective energy solutions using modern renewable technologies.
            From panel installation and electrical integration to battery
            storage systems, we deliver optimized energy performance tailored
            for Lebanon.
          </p>

          <div className="expertise-flex-1">
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Energy Efficiency</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">01</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Certified Installation</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">02</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Modern Technology</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">03</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Reliable Performance</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">04</p>
            </div>
          </div>

          <p className="expertise-style-p-4">
            Helping reduce dependency on generators through dependable solar
            energy systems, high-quality installation standards, and long-term
            renewable power solutions designed for Lebanon’s growing energy
            demands and sustainability goals.
          </p>
        </div>

        <p></p>
      </div>

      <img
        className="image-second"
        style={{ width: "100%", height: "500px" }}
        src={imageconstruction3}
        alt=""
      />
    </div>
  );
};

export default MoreAbotuSolarPanel;
