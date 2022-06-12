import { useState } from "react";
export function Header(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <header className={isActive ? "nav-open" : ""}>
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
            <a className="nav__link" href="#home">
              home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#AboutMe">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#MyWork">
              My Work
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#Footer">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
