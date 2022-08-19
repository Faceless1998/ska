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

  return (
    <>
      <input type="checkbox" id="active"/>
      <label for="active" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <div class="wrapper">
        <ul>
          <li>
            {" "}
            <NavLink
              className="nav-item"
              exact
              to="/"
            >
              {t("Home")}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-item"
              exact
              to="/about"
            >
              {t("About")}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-item"
              exact
              to="/news"
            >
              {t("News")}{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-item"
              exact
              to="/gallery"
            >
              {t("Gallery")}{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-item"
              exact
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
