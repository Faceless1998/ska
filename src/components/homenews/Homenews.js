import React from "react";
import "./homenews.css";

import { NavLink } from "react-router-dom";

import MAIN1 from "./../../assets/topic1.png";
import MAIN2 from "./../../assets/topic2.png";
import MAIN3 from "./../../assets/topic3.png";
import MAIN4 from "./../../assets/topic4.png";
import MAIN5 from "./../../assets/topic5.png";
import MAIN6 from "./../../assets/topic6.png";
import MAIN7 from "./../../assets/topic7.png";
import MAIN8 from "./../../assets/topic8.png";

const Homenews = () => {
  return (
    <>
     <div class="topic-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Explore top subjects</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN1} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN2} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN3} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN4} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN5} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN6} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN7} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src={MAIN8} alt="alternative" />
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><div class="thisdiv">Programing</div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div className="displeyer">
          <NavLink
            className="novanews border-btn"
            data-animation="fadeInLeft"
            data-delay="0.7s"
            exact
            to="/news"
          >
            View More Subjects
          </NavLink>
      </div>
    </>
  );
};

export default Homenews;
