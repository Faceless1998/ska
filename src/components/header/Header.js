import React from "react";
import "./header.css";
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { t } = useTranslation();
  // const changeLanguageHandler = (lang) => {
  //   localStorage.setItem("lang", lang);
  //   window.location.reload();
  // };
  // let langname;
  // if (localStorage.getItem("lang") === "en") {
  //   langname = (
  //     <p
  //       style={{ borderRight: "none" }}
  //       className="nav-item-lang"
  //       onClick={() => changeLanguageHandler("en")}
  //     >
  //       EN
  //     </p>
  //   );
  // } else {
  //   langname = (
  //     <p
  //       style={{ borderRight: "none" }}
  //       className="nav-item-lang"
  //       onClick={() => changeLanguageHandler("ge")}
  //     >
  //       GE
  //     </p>
  //   );
  // }

  return (
    <>

    </>
  );
};
