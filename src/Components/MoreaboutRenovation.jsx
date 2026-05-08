import React from "react";
import renovation from "../Images/renovation-1.jpg";
import renovation2 from "../Images/renovation-2.jpg";
import renovation3 from "../Images/renovation-3.jpg";

import rightarrow from "../Images/arrowright.png";
import checkcorrect from "../Images/check.png";
import "../Styles/moreabout.css";
import svg1 from "../Images/expertise-item-1.svg";

const MoreAboutRenovation = () => {
  return (
    <div className="more-about">
      <div className="data-background">
        <div className="container">
          <div className="breadcrumb-content">
            <div className="row">
              <div className="box-mau">
                <h2 className="sas">Apartment Renovation</h2>
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
                  Renovation
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
          <img className="elect-image-1" src={renovation} alt="" />

          <img
            className="elect-image-1"
            src={renovation2}
            alt=""
            style={{
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        <div className="elect-text-1">
          <h1 className="title-549">Apartment Renovation</h1>

          <p className="p-elect-1">Interior Design, Remodeling</p>

          <p className="p-elect-2">
            Modern renovation solutions tailored for residential apartments and
            spaces
          </p>

          <div className="flexy-1">
            <h2 className="title-elect-1">Modern Living</h2>

            <p className="p-elect-3">More of our services:</p>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Kitchen Renovation</p>
            </div>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Bathroom Remodeling</p>
            </div>

            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />

              <p className="pvc-p">Interior Finishing</p>
            </div>

            <button className="request-service">Request service</button>
          </div>
        </div>
      </div>

      <div className="expertise-style">
        <div className="expertise-big-box">
          <h3 className="expertise-style-h3-1">
            Transforming Spaces With Precision
          </h3>

          <p className="expertise-style-p-1 ">
            Our apartment renovation services combine modern aesthetics with
            practical functionality to create comfortable and stylish living
            spaces. From structural upgrades and tiling to painting, lighting,
            and finishing, we deliver high-quality renovations customized to
            every client’s vision.
          </p>

          <div className="expertise-flex-1">
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Modern Design</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">01</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Quality Materials</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">02</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Skilled Craftsmanship</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">03</p>
            </div>

            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />

              <p className="expertise-style-p-2">Elegant Finishing</p>

              <div className="orange-box"></div>

              <p className="expertise-style-p-3">04</p>
            </div>
          </div>

          <p className="expertise-style-p-4">
            Delivering apartment renovation services across Lebanon with
            attention to detail, premium workmanship, and modern interior
            solutions designed to enhance comfort, value, and everyday living
            experiences for homeowners.
          </p>
        </div>

        <p></p>
      </div>

      <img
        className="image-second"
        style={{ width: "100%", height: "500px" }}
        src={renovation3}
        alt=""
      />
    </div>
  );
};

export default MoreAboutRenovation;
