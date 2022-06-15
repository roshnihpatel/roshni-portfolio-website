import { useState } from "react";
import React from "react";
import crystal_1 from "../images/1-crystal.png";
import crystal_2 from "../images/2-crystal.png";
import crystal_3 from "../images/3-crystal.png";
import crystal_4 from "../images/4-crystal.png";
import crystal_5 from "../images/5-crystal.png";
import crystal_6 from "../images/6-crystal.png";
import crystal_7 from "../images/7-crystal.png";
import crystal_8 from "../images/8-crystal.png";

import { Link } from "react-scroll";
//import {crystal_1} from "../images/1-crystal.png"
export function Header(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const closeNavigation = () => {
    setIsActive(false);
  };
  return (
    <header className={isActive ? "nav-open" : ""}>
      <div className="crystals">
        <div className="crystal-container">
          <img className="crystal" src={crystal_1} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_2} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_3} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_4} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_5} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_6} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_7} alt="" />
        </div>
        <div className="crystal-container">
          <img className="crystal" src={crystal_8} alt="" />
        </div>
      </div>
      <button
        className={isActive ? " nav-toggle nav-icon-light " : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={() => setIsActive(!isActive)}
      >
        {/* <span className="hamburger-menu"> */}
        <i className="fa-solid fa-bars hamburger-menu"></i>
        {/* </span> */}
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="AboutMe" onClick={closeNavigation}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="MyLang" onClick={closeNavigation}>
              Languages/Tech
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="MyWork" onClick={closeNavigation}>
              My Work
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="Footer" onClick={closeNavigation}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
