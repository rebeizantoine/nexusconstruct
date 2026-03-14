import React from "react";
import imageconstruction from "../Images/electperson.jpg";
import rightarrow from "../Images/arrowright.png";
import checkcorrect from "../Images/check.png";
import "../Styles/moreabout.css";
import svg1 from "../Images/expertise-item-1.svg";

const checklistItems = ["PVC Insulated Cables", "Rubber Cables", "EPR Cables"];
const expertiseItems = [
  { title: "Power Lines", number: "01" },
  { title: "Circuit Masters", number: "02" },
  { title: "Wiring Works", number: "03" },
  { title: "Spark Solutions", number: "04" },
];

const Moreabout = () => {
  return (
    <div className="more-about">
      {/* Breadcrumb Section */}
      <div className="data-background">
        <div className="container">
          <h2 className="sas">About Us</h2>
          <ul className="breadcrumb">
            <li>
              <a href="/" style={{ color: "orange" }}>
                Home
              </a>
            </li>
            <li>
              <img className="arrow-right" src={rightarrow} alt="" />
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* Electrical Wiring Section */}
      <section className="elect-box-1">
        <img
          className="elect-image-1"
          src={imageconstruction}
          alt="Electrical Wiring"
        />
        <div className="elect-text-1">
          <h1 className="title-549">Electrical Wiring</h1>
          <p className="p-elect-1">Planning, Real Estate</p>
          <p className="p-elect-2">
            In compliance with the stringent Lebanese Standards (Libnor)
          </p>

          <div className="flexy-1">
            <h2 className="title-elect-1">Big Project</h2>
            <p className="p-elect-3">Types of Wiring Commonly Used</p>

            {checklistItems.map((item, idx) => (
              <div key={idx} className="checklist">
                <img className="checklist123" src={checkcorrect} alt="check" />
                <p className="pvc-p">{item}</p>
              </div>
            ))}

            <button className="request-service">Request Service</button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-style">
        <div className="expertise-big-box">
          <h3 className="expertise-style-h3-1">Your Vision, Our Expertise</h3>
          <p className="expertise-style-p-1">
            For over a decade, our Lebanon-based company has led the industry in
            electrical wiring solutions. With a proven track record of
            excellence, we specialize in safe, efficient installations for
            residential and commercial properties. Our skilled team ensures
            reliable power distribution, integrating cutting-edge technology for
            sustainable and secure electrical systems.
          </p>

          <div className="expertise-flex-1">
            {expertiseItems.map((item, idx) => (
              <div key={idx} className="expertise-style-flex-2">
                <img src={svg1} alt={item.title} />
                <p className="expertise-style-p-2">{item.title}</p>
                <div className="orange-box"></div>
                <p className="expertise-style-p-3">{item.number}</p>
              </div>
            ))}
          </div>

          <p className="expertise-style-p-4">
            Experience excellence in electrical solutions with our dedicated
            team. From installations to repairs, we deliver reliable service,
            ensuring efficient systems for homes and businesses in Lebanon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Moreabout;
