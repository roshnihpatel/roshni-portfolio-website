import { Footer } from "../Footer";
import portfolio from "../images/portfolio.png";
import { Link } from "react-router-dom";
import { Crystals } from "../Crystals";

export function PortfolioApp(): JSX.Element {
  return (
    <div>
      <div className="home-nav">
        <Link to="/">
          <span
            className="iconify iconify-home"
            data-icon="ant-design:home-filled"
          ></span>
        </Link>
      </div>
      <Crystals />

      <section className="project-page portfolio-app bg-mid">
        <div className="container">
          <div className="split">
            <div>
              <h1 className="section--title">
                <strong>Portfolio App</strong>
              </h1>
              <p className="section--subtitle">React App</p>
              <p className="project-info">
                This is a personal project that I made to showcase some of the
                projects I have worked on. I let responsive design be a focus of
                this app as I wanted to get more familiar with responsive
                layouts, media quiries and CSS best practices.
                <br />
                <br />
                The main things I learned from this project are:
              </p>
              <ul className="learned-list">
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Using a mobile-first approach and then adding complexity with
                  media queries as you scale up to desktop.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  A deeper understanding of features of CSS including custom
                  properties, compound selectors, child selectors and media
                  queries.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Using dynamic routing to add multiple 'pages' to my app.
                </li>
              </ul>

              <ul className="links-list">
                <li className="links-list__item">
                  <a
                    href="https://roshni-portfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="iconify iconify-link"
                      data-icon="fluent:app-generic-20-filled"
                    ></span>
                    App
                  </a>
                </li>

                <li className="links-list__item">
                  <a
                    href="https://workable-dentist-613.notion.site/Portfolio-App-846d921670d245c89c3133555b8d1b6c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="iconify iconify-link"
                      data-icon="carbon:document"
                    ></span>
                    Documentation
                  </a>
                </li>
                <li className="links-list__item">
                  <a
                    href="https://github.com/roshnihpatel/roshni-portfolio-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="iconify iconify-link"
                      data-icon="bx:code-alt"
                    ></span>
                    Code
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img src={portfolio} alt="portfolio app screen shot" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
