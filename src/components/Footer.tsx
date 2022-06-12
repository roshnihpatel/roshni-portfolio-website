export function Footer(): JSX.Element {
  return (
    <section className=" footer bg-dark-2" id="Footer">
      <div className="container">
        <h2 className="section--title section--title-footer">
          Connect With Me
        </h2>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://fontawesome.com/icons/linkedin?s=brands"
            >
              <i className="fa-brands fa-github social-list__icon"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://fontawesome.com/icons/linkedin?s=brands"
            >
              <i className="fa-brands fa-linkedin social-list-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
