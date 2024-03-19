import React from "react";
import "../Styles/footer.css";
import Steelcity from "../Images/steelcitywhite.png";
import Facebook from "../Images/facebook2.png";
import Linkedin from "../Images/linkedin2.png";
import twitter from "../Images/twitter.png";
import pinterest from "../Images/pinterest.png";
import email from "../Images/mail.png";
import kite from "../Images/paper-pane.png";
import phone from "../Images/phone.png";
import { useNavigate } from "react-router-dom";
import blacktry from "../Images/blacktry.png";
const Footer = () => {
  const navigate = useNavigate();

  const handleTermsClick = () => {
    navigate("/termspolicy");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="footer-area-one" id="footer">
      <div className="footer-area-one-bg">
        <div className="container">
          <div className="footer-top-one">
            <div className="row">
              <div className="col1">
                <img className="footer-logo-1" src={blacktry} alt="" />
                <div className="footer-content-1">
                  <p>
                    Stay updated with our latest news and projects by following
                    us on the links below.
                  </p>
                  <div className="socials">
                    <ul className="unlisted">
                      <li>
                        <img src={Facebook} alt="" />
                      </li>
                      <li>
                        <img src={Linkedin} alt="" />
                      </li>
                      <li>
                        <img src={twitter} alt="" />
                      </li>
                      <li>
                        <img src={pinterest} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col2">
                <div className="title111">ADDRESS</div>
                <div className="flex-footer">
                  <img src={kite} alt="" />
                  <p>
                    Beirut Digital District 1499 Nassif El Yazaji St, Street
                  </p>
                  <div></div>
                </div>
                <div className="flex-footer">
                  <img src={email} alt="" />
                  <div className="p-flex-box">
                    <p className="p-flex-1">nexus-construct@hotmail.com</p>
                    <p className="p-flex-1">nexus-construct@hotmail.com</p>
                  </div>
                </div>
                <div className="flex-footer">
                  <img src={phone} alt="" />
                  <div className="p-flex-box">
                    <p className="p-flex-1">(01) 255-012</p>
                    <p className="p-flex-1">(76) 052-012</p>
                  </div>
                </div>
              </div>
              <div className="col3">
                <div className="title222">NEWSLETTER</div>
                <div className="footer-address">
                  <p>
                    Just enter your E-mail and wait for the confirmation to join
                    our newsletter
                  </p>
                  <div className="input-container">
                    <input type="email" placeholder="Your E-mail Address..." />
                    <button className="invite-btn">
                      <i>
                        <img src={kite} alt="" />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-123"></div>
        <div className="copyright">
          <p className="copyright-p1">
            © NexusConstruct 2024 | All Rights Reserved
          </p>
          <p className="copyright-p2" onClick={handleTermsClick}>
            Terms & Condition
          </p>
          <p className="copyright-p4" onClick={handleTermsClick}>
            Privacy Policy
          </p>
          <p className="copyright-p3" onClick={handleContactClick}>
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
