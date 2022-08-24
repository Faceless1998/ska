import React, { useEffect } from "react";
import "./news.css";

import MAIN1 from "./../../assets/cheese-2267165__340.png";
import MAIN2 from "./../../assets/mail-2237468__340.png";
import MAIN3 from "./../../assets/mug-2235591__340.png";
import MAIN4 from "./../../assets/office-2240932__340.png";
import MAIN5 from "./../../assets/vr-2237467__340.png";

// import options from "./NewsInfo";

import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

const imageJSON = [
  { src: MAIN1 },
  { src: MAIN2 },
  { src: MAIN3 },
  { src: MAIN4 },
  { src: MAIN5 },
];

export const News = () => {
  // const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}

  return (
    <>
      <div className="aawrapper">
        <div className="aacontainer">
          <h1 className="aatitle">A JavaScript Ligthbox</h1>
          <div className="aainner-wrapper">
            {imageJSON.map((img, index) => {
              return (
                <div className="aacard" key={index}>
                  <div className="aainner-card">
                    <div className="aaimg-wrapper">
                      <Link to={`/news/${index}`}  onClick={refreshPage}>
                        <div className="cardn">
                          <img
                            src={img.src}
                            alt=""
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="aacontent">
                      <h1>Hello</h1>
                      <p>Hi</p>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
