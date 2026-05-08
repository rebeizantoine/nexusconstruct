import React, { useState, useEffect } from "react";
import "../Styles/termsofuse.css";
import axios from "axios";

const Termsofuse = () => {
  const [termsData, setTermsData] = useState([]);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const response = await axios.get(
          "https://steelcitybackend.onrender.com/api/terms/terms",
        );
        setTermsData(response.data);
      } catch (error) {
        console.error("Error fetching terms data:", error);
      }
    };

    fetchTermsData();
  }, []);

  return (
    <div className="terms-page">
      {termsData.map((term) => (
        <div key={term._id} className="terms-content">
          <h1 className="terms-title">Terms of Use & Privacy Policy</h1>

          <section className="terms-section">
            <h2>Terms of Use</h2>
            {[term.termsofuse1, term.termsofuse2, term.termsofuse3].map(
              (paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ),
            )}
          </section>

          <section className="terms-section">
            <h2>Privacy Policy</h2>
            <p>{term.privacypolicy}</p>
          </section>

          <section className="terms-section">
            <h2>Cookies</h2>
            <p>{term.cookies}</p>
          </section>

          <section className="terms-section">
            <h2>Changes to Privacy Statement</h2>
            <p>{term.changestostatement}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Termsofuse;
