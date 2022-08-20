import React, { useEffect } from "react";
import "./news.css";
import options from "./NewsInfo";

export const Newsingle = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let describtion;
  if (localStorage.getItem("lang") === "ge") {
    describtion = options[match.params.id].describtiongeo;
  } else {
    describtion = options[match.params.id].describtioneng;
  }

  return (
    <>
      <div class="we-are-block">
        <div id="about-us-section">
          <div class="about-us-image">
            <img
              src={options[match.params.Infotitle].img1}
              width="808"
              height="458"
              alt=""
            />
          </div>

          <div class="about-us-info">
            <h2>{options[match.params.id].CompanyName}</h2>

            <p>{describtion}</p>
          </div>
        </div>

        <div id="history-section">
          <div class="history-image">
            <img
              src={options[match.params.id].Infotitle}
              width="951"
              height="471"
              alt="Building Pic"
            />
          </div>

          <div class="history-info">
            <h2>Cooperation</h2>

            <p>
              Ltd “Home alone” and building company “
              {options[match.params.id].Infotitle}” have signed a cooperation,
              which allows the residents of {options[match.params.id].Infotitle}{" "}
              to use the services of a smart home, remotely manage and smarten
              up any home appliances in the house. We offer a fast, easy and
              ideal solution for the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};