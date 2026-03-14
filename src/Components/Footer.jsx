import React from "react";
import "../Styles/footer.css";
import Facebook from "../Images/facebook2.png";
import Linkedin from "../Images/linkedin2.png";
import twitter from "../Images/twitter.png";
import pinterest from "../Images/pinterest.png";
import email from "../Images/mail.png";
import kite from "../Images/paper-pane.png";
import phone from "../Images/phone.png";
import blacktry from "../Images/blacktry.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container footer-container">
          {/* Logo & Socials */}
          <div className="footer-col footer-logo-col">
            <img src={blacktry} alt="Logo" className="footer-logo" />
            <p className="footer-text">
              Stay updated with our latest news and projects by following us on
              the links below.
            </p>
            <ul className="footer-socials">
              {[Facebook, Linkedin, twitter, pinterest].map((icon, idx) => (
                <li key={idx}>
                  <img src={icon} alt="" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Address */}
          <div className="footer-col">
            <h4 className="footer-title">ADDRESS</h4>
            <div className="footer-contact">
              <img src={kite} alt="" />
              <p>Beirut Digital District, 1499 Nassif Yazaji St</p>
            </div>
            <div className="footer-contact">
              <img src={email} alt="" />
              <div>
                <p>nexus-construct@hotmail.com</p>
                <p>nexus-construct@hotmail.com</p>
              </div>
            </div>
            <div className="footer-contact">
              <img src={phone} alt="" />
              <div>
                <p>(01) 255-012</p>
                <p>(76) 052-012</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-title">NEWSLETTER</h4>
            <p className="footer-text">
              Just enter your E-mail and wait for the confirmation to join our
              newsletter
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Your E-mail Address..." />
              <button className="newsletter-btn">
                <img src={kite} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="footer-bottom">
        <hr />
        <div className="footer-copyright">
          <p>© NexusConstruct 2024 | All Rights Reserved</p>
          <p onClick={() => navigate("/terms")}>Terms & Conditions</p>
          <p onClick={() => navigate("/terms")}>Privacy Policy</p>
          <p onClick={() => navigate("/contact")}>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
