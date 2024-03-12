import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagerecent from "../Images/image-recent.png";
import arrownext from "../Images/arrowup.png";
import Plussizse from "../Images/the-plus-image.png";
import "../Styles/recent.css";

const Recent = () => {
  // State to track the visibility of each popup
  const [projects, setProjects] = useState([]);
  const [showPopups, setShowPopups] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch the data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://steelcitybackend.onrender.com/projects/"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const getFirst10Words = (text) => {
    const words = text.split(" ");
    return words.slice(0, 10).join(" ");
  };

  const navigateToProject = (projectTitle) => {
    navigate(`/projectviewshow/${projectTitle}`); // Navigate to the project title route
  };

  const togglePopup = (index) => {
    const updatedPopups = [...showPopups];
    updatedPopups[index] = !updatedPopups[index];
    setShowPopups(updatedPopups);
  };

  return (
    <div className="recent-box-all" id="projects">
      <div className="black-box">
        <h2 className="recent-h2">RECENT WORK</h2>
        <div className="recent-h3">Building Strong Foundations For Success</div>
      </div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={project._id} className="single-box">
            <div
              className="single-image"
              onMouseEnter={() => togglePopup(index)}
              onMouseLeave={() => togglePopup(index)}
              style={{ position: "relative", display: "inline-block" }}
            >
              <img
                src={project.projectImage}
                alt=""
                onClick={() => navigateToProject(project.projectTitle)} // Corrected onClick here
                style={{
                  cursor: "pointer",
                }}
              />
              {showPopups[index] && (
                <div className="popup">
                  <h3>{project.projectTitle}</h3>
                  <p>{getFirst10Words(project.projectDescription)}</p>
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
