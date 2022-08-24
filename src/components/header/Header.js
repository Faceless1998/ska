import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { t } = useTranslation();
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}
  return (
    <>
      <input type="checkbox" id="active"/>
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li>
            {" "}
            <NavLink 
              onClick={refreshPage}
              className="nav-item"
             
              to="/"
            >
              {t("Home")}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={refreshPage}
              className="nav-item"
             
              to="/about"
            >
              {t("About")}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={refreshPage}
              className="nav-item"
             
              to="/news"
            >
              {t("News")}{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={refreshPage}
              className="nav-item"
             
              to="/gallery"
            >
              {t("Gallery")}{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={refreshPage}
              className="nav-item"
             
              to="/contact"
            >
              {t("Contact")}{" "}
            </NavLink>
          </li>

          <li>
            <div id="wrap">
          <div
              style={{ borderRight: "none" }}
              className="nav-item-lang nav-item"
              onClick={() => changeLanguageHandler("en")}
              id="left"
            >
              {t("EN")}
            </div>
            <div
              style={{ borderRight: "none" }}
              className="nav-item-lang nav-item"
              onClick={() => changeLanguageHandler("ge")}
              id="right"
            >
              {t("GE")}
            </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
