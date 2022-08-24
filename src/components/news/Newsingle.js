import React from "react";
import "./news.css";
import options from "./NewsInfo";

export const Newsingle = ({ match }) => {
  React.useEffect(() => {
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
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src={options[match.params.id].imageinside1}
              width="808"
              height="458"
              alt=""
            />
            <img
              src={options[match.params.id].imageinside2}
              width="808"
              height="458"
              alt=""
            />
          </div>

          <div className="about-us-info">
            <h2>{options[match.params.id].Infotitle}</h2>

            <p>{describtion}</p>
          </div>
        </div>
      </div>
    </>
  );
};