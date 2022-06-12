export function Header(): JSX.Element {
  return (
    <header>
      <div className="logo"></div>
      <button className="nav-toggle" aria-label="toggle navigation">
        {/* <span className="hamburger-menu"> */}
        <i className="fa-solid fa-bars hamburger-menu"></i>
        {/* </span> */}
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://www.w3schools.com/css/css_rwd_viewport.asp"
            >
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
