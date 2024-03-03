import React from "react";
import "../Styles/projectview.css";
import "../Styles/moreabout.css";
import rightarrow from "../Images/arrowright.png";
import project1 from "../Images/project-1.png";
import project2 from "../Images/project-2.png";
import project3 from "../Images/project-3.png";
import project4 from "../Images/project-4.png";
import check from "../Images/check.png";
import checkcorrect from "../Images/check.png";
import star from "../Images/star.png";
import Facebook from "../Images/facebook2.png";
import Linkedin from "../Images/linkedin2.png";
import twitter from "../Images/twitter.png";
import pinterest from "../Images/pinterest.png";
import email from "../Images/mail.png";

const Projectview = () => {
  return (
    <div>
      {" "}
      <div className="data-background">
        <div className="container">
          <div className="breadcrumb-content">
            <div className="row">
              <div className="box-mau">
                <h2 className="sas">Project Details</h2>
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
                <li>Project Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project-information">
        <h3 className="project-title">Project Information</h3>
        <div className="main-content">
          <div className="info-main">
            <div className="info-item">
              <h6 className="info-subtitle">Category:</h6>
              <p>Corporate, business</p>
            </div>
            <div className="info-item">
              <h6 className="info-subtitle">Category:</h6>
              <p>Corporate, business</p>
            </div>
            <div className="info-item">
              <h6 className="info-subtitle">Category:</h6>
              <p>Corporate, business</p>
            </div>
            <div className="info-item">
              <h6 className="info-subtitle">Category:</h6>
              <p>Corporate, business</p>
            </div>
          </div>
          <div className="rating-box">
            <div className="rating-flex">
              <h6>Rating:</h6>
              <div className="stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="rating-socials">
              <ul>
                <li>
                  <a href="">
                    <img src={Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <img className="image-project-1" src={project1} alt="" />
      <div>
        <div className="small-title-box">
          <h2>Redefining Construction Standards</h2>
          <p className="small-title-box-p1">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            non, viverra
          </p>
          <p className="small-title-box-p2">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lortis non,
            viverraAliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            non, viverraAliquam er justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo
          </p>
        </div>
        <div className="images-3">
          <img src={project2} alt="" />
          <img src={project3} alt="" />
          <img src={project4} alt="" />
        </div>
        <div>
          <h2 className="under-images-3">
            The project is start from is standerd shine
          </h2>
          <div>
            <div className="flex-project">
              <img className="check-project" src={check} alt="" />
              <p>Aliquam eros justo, posuere Aliquam eros justo, po loborti</p>
            </div>
            <div className="flex-project">
              <img className="check-project" src={check} alt="" />
              <p>Aliquam eros justo, posuere Aliquam eros justo, po loborti</p>
            </div>
            <div className="flex-project">
              <img className="check-project" src={check} alt="" />
              <p>Aliquam eros justo, posuere Aliquam eros justo, po loborti</p>
            </div>
            <div className="flex-project">
              <img className="check-project" src={check} alt="" />
              <p>Aliquam eros justo, posuere Aliquam eros justo, po loborti</p>
            </div>
            <div className="flex-project">
              <img className="check-project" src={check} alt="" />
              <p>Aliquam eros justo, posuere Aliquam eros justo, po loborti</p>
            </div>
          </div>
          <p className="p-project-of-all">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            non, viverra
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projectview;
