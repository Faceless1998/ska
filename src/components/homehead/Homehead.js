import React from "react";
import "./homehead.css";

import { NavLink } from "react-router-dom";

const Homehead = () => {
  return (
    <>
      <section className="slider-area ">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                  <div className="hero__caption">
                    <div className="headtitle" data-animation="fadeInLeft" data-delay="0.2s">
                      Online learning
                      <br /> platform
                    </div>
                    <div className="headparag" data-animation="fadeInLeft" data-delay="0.4s">
                      Build skills with courses, certificates, and degrees
                      online from world-className universities and companies
                    </div>
                    <NavLink
                      className="btn hero-btn"
                      data-animation="fadeInLeft"
                      data-delay="0.7s"
                      exact
                      to="/news"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homehead;
