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
              <p className="pvc-p">PVC Insulated Cables</p>
            </div>
            <div className="checklist">
              <img className="checklist123" src={checkcorrect} alt="" />
              <p className="pvc-p">PVC Insulated Cables</p>
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
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fermentum ullamcorper viverra lat
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros a posuere lobortis non,
            viverraAliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere vierra .Aliquam eros justo, posuere lobortis
          </p>
          <div className="expertise-flex-1">
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Golden Hammer</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Golden Hammer</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Golden Hammer</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
            <div className="expertise-style-flex-2">
              <img src={svg1} alt="" />
              <p className="expertise-style-p-2">Golden Hammer</p>
              <div className="orange-box"></div>
              <p className="expertise-style-p-3">01</p>
            </div>
          </div>
          <p className="expertise-style-p-4">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis entum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros just posre lobortis non,
            viverraAliquam eros justo
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
