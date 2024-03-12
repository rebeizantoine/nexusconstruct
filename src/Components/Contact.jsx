import React, { useState } from "react";
import { toast } from "react-toastify";
import "../Styles/contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Name validation: Should not contain numbers
    if (/\d/.test(name)) {
      toast.error("Name should not contain numbers");
      return;
    }

    // Email validation
    if (!isValidEmail(email)) {
      toast.error("Invalid email");
      return;
    }

    // Here you can handle form submission logic, like sending data to backend, etc.

    // Show success toast
    toast.success("Message sent!");

    // Clear form fields after submission
    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
  };

  return (
    <div className="background123123">
      <div className="container123123">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">
                CONTACT INFO : +961 (01) 255-012
              </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <form onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">
                      CANCEL
                    </button>
                    <button type="submit" className="app-form-button">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          inspired by
          <a
            className="credits-link"
            href="https://dribbble.com/shots/2666271-Contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  strokeWidth="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  strokeWidth="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  strokeWidth="20"
                ></path>
              </g>
            </svg>
            Gururaj
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
