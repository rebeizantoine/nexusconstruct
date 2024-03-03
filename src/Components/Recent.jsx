import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagerecent from "../Images/image-recent.png";
import arrownext from "../Images/arrowup.png";
import Plussizse from "../Images/the-plus-image.png";
import "../Styles/recent.css";

const Recent = () => {
  // State to track the visibility of each popup
  const [showPopups, setShowPopups] = useState([false, false, false]);

  // Function to toggle the visibility of a popup based on its index
  const togglePopup = (index) => {
    const updatedPopups = [...showPopups];
    updatedPopups[index] = !updatedPopups[index];
    setShowPopups(updatedPopups);
  };
  const imageTitles = ["CONCRETE WORK", "ROOFING WORKS", "SOLAR INSTALLATION"];
  const imageTexts = [
    "lorem ipsum chiki biki",
    "lorem ipsum chiki biki",
    "lorem ipsum chiki biki",
  ];

  // Custom arrow component
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-next-arrow ${className}`}
        style={{
          ...style,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#ff6600",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          marginRight: "200px",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-prev-arrow ${className}`}
        style={{
          ...style,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#ff6600",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        Prev
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="recent-box-all">
      <div className="black-box">
        <h2 className="recent-h2">RECENT WORK</h2>
        <div className="recent-h3">Building Strong Foundations For Success</div>
      </div>
      <Slider {...settings}>
        {/* Map through an array to render 3 images */}
        {[...Array(3).keys()].map((index) => (
          <div key={index} className="single-box">
            <div
              className="single-image"
              onMouseEnter={() => togglePopup(index)}
              onMouseLeave={() => togglePopup(index)}
              style={{ position: "relative", display: "inline-block" }}
            >
              <img src={imagerecent} alt="" />
              {/* Show popup if corresponding index is true */}
              {showPopups[index] && (
                <div className="popup">
                  <h3>{imageTitles[index]}</h3>
                  <p>{imageTexts[index]} </p>{" "}
                  <p className="para-123">
                    <img className="plus-sign123" src={Plussizse} alt="" />
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recent;
