export function Footer(): JSX.Element {
  return (
    <section className="footer bg-dark-2" id="Footer">
      <div className="container">
        <h2 className="section--title section--title-footer">
          Connect With Me
        </h2>
        <p className="footer-email">roshnihpatel@outlook.com</p>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/roshnihpatel"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github social-list__icon"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="www.linkedin.com/in/roshni-patel-069895216"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin social-list-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
