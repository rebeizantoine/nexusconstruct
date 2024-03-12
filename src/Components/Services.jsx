import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/services.css";
import service1 from "../Images/service-1.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://steelcitybackend.onrender.com/services/"
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getService = (index) => {
    return services.length > index ? services[index] : null;
  };

  const truncateWords = (str, numWords) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }
    return str;
  };

  const firstService = getService(0);
  const secondService = getService(1);
  const thirdService = getService(2);

  const navigate = useNavigate();

  const handleFirstClick = () => {
    navigate("/Electrical");
  };
  const handleSecondClick = () => {
    navigate("/Construction");
  };
  const handleThirdClick = () => {
    navigate("/Solarpanel");
  };

  return (
    <div id="services">
      <div className="services-all">
        <h2 className="our-services">OUR SERVICES</h2>
        <div className="box-flex-1">
          <div>
            <h5>Constructing Excellence Delivering Results</h5>
          </div>
          <div>
            <p>
              Constructing excellence, our hallmark: dedicated team, innovative
              solutions, precise execution, and results-driven approach,
              ensuring quality outcomes for every project we undertake.
            </p>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={firstService?.serviceImage || service1} alt="" />
            <h2>{firstService?.serviceTitle || "Service Title"}</h2>
            <p>
              {truncateWords(
                firstService?.serviceDescription || "Service Description",
                14
              )}
            </p>
            <div className="read-more-box-2">
              <button className="button-read-more-2" onClick={handleFirstClick}>
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={secondService?.serviceImage || service1} alt="" />
            <h2>{secondService?.serviceTitle || "Service Title"}</h2>
            <p>
              {truncateWords(
                secondService?.serviceDescription || "Service Description",
                14
              )}
            </p>
            <div className="read-more-box-2">
              <button
                className="button-read-more-2"
                onClick={handleSecondClick}
              >
                READ MORE <i>+</i>
              </button>
            </div>
          </div>
        </div>
        <div className="all-services">
          <div className="single-service">
            <img src={thirdService?.serviceImage || service1} alt="" />
            <h2>{thirdService?.serviceTitle || "Service Title"}</h2>
            <p>
              {truncateWords(
                thirdService?.serviceDescription || "Service Description",
                14
              )}
            </p>
            <div className="read-more-box-2">
              <button className="button-read-more-2" onClick={handleThirdClick}>
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
