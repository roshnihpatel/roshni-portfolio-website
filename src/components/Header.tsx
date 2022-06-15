import { useState } from "react";

import { Crystals } from "./Crystals";

import { Link } from "react-scroll";

export function Header(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const closeNavigation = () => {
    setIsActive(false);
  };
  return (
    <header className={isActive ? "nav-open" : ""}>
      <Crystals />
      <button
        className={isActive ? " nav-toggle nav-icon-light " : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={() => setIsActive(!isActive)}
      >
        <i className="fa-solid fa-bars hamburger-menu"></i>
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
