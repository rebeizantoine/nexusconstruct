import React from "react";
import "../Styles/services.css";
import service1 from "../Images/service-1.png";

const Services = () => {
  return (
    <div>
      <div className="services-all">
        <h2 className="our-services">OUR SERVICES</h2>
        <div className="box-flex-1">
          <div>
            <h5>Constructing Excellence Delivering Results</h5>
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the It is a long established fact that a reader will be distracted
              by the It is a long established fact that a reader will be
            </p>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={service1} alt="" />
            <h2>Electrical Wiring</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the
            </p>
            <div className="read-more-box-2">
              <button className="button-read-more-2">
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={service1} alt="" />
            <h2>Electrical Wiring</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the
            </p>
            <div className="read-more-box-2">
              <button className="button-read-more-2">
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={service1} alt="" />
            <h2>Electrical Wiring</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the
            </p>
            <div className="read-more-box-2">
              <button className="button-read-more-2">
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
