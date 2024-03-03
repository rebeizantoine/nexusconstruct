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

const Footer = () => {
  return (
    <div className="footer-area-one">
      <div className="footer-area-one-bg">
        <div className="container">
          <div className="footer-top-one">
            <div className="row">
              <div className="col1">
                <img className="footer-logo-1" src={Steelcity} alt="" />
                <div className="footer-content-1">
                  <p>
                    Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is
                    simply is out no our o dummy text.
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
                  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <div></div>
                </div>
                <div className="flex-footer">
                  <img src={email} alt="" />
                  <div className="p-flex-box">
                    <p className="p-flex-1">debbie.baker@example.com</p>
                    <p className="p-flex-1">nevaeh.simm@example.com</p>
                  </div>
                </div>
                <div className="flex-footer">
                  <img src={phone} alt="" />
                  <div className="p-flex-box">
                    <p className="p-flex-1">(405) 555-0128</p>
                    <p className="p-flex-1">(629) 555-0129</p>
                  </div>
                </div>
              </div>
              <div className="col3">
                <div className="title222">NEWSLETTER</div>
                <div className="footer-address">
                  <p>Lorem Ipsum is simply is dumi omy is text Loremo Ipsum</p>
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
          <p className="copyright-p1">© SteelCity 2023 | All Rights Reserved</p>
          <p className="copyright-p2">Terms & Condition</p>
          <p className="copyright-p4">Privacy Policy</p>
          <p className="copyright-p3">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
