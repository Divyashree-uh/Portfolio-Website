import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container" id="Projects">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My <span>Projects</span> 
          </h1>
          <p>
            Crafted impactful projects in both machine learning and full stack
            development domains. Created intelligent machine learning models
            while also building end-to-end web applications, showcasing a
            versatile skillset.
          </p>
          <a href="https://www.linkedin.com/in/divyashree-v-46a499287/" target="_blank">
            <button>Hire Me</button>
</a>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Portfolio App </h3>
              <p>
                <li>Developing portfolio app using React framework.</li>
                <li>Designing user-friendly interface to showcase projects.</li>
                <li>
                  Enabling interactive features for enhanced user engagement.
                </li>
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Fruit Adulteration using ML </h3>
              <p>
                <li>Developed ML-based system to detect fruit adulteration.</li>
                <li>Created graphical health visualization for fruits</li>
                <li>Quantiﬁed percentage of unhealthy portions.</li>
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Big Blue Bus </h3>
              <p>
                <li>
                  Implemented Cloud Server Infrastructure and Created Android
                  app for advance ticket booking.
                </li>
                <li>Integrated pass renewal functionality.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
