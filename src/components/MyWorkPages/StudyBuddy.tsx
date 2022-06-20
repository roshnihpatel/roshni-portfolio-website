import { Footer } from "../Footer";
import study_buddy from "../images/study-buddy.png";
import { Link } from "react-router-dom";
import { Crystals } from "../Crystals";

export function StudyBuddy(): JSX.Element {
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

      <section className="project-page studdy-budy-app bg-mid">
        <div className="container">
          <div className="split">
            <div>
              <h1 className="section--title">
                <strong>Studdy Buddy App</strong>
              </h1>
              <p className="section--subtitle">Full-Stack App</p>
              <p className="project-info">
                We have developed the Study Buddy App for students in our{" "}
                <a
                  href="https://academy.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-info__link"
                >
                  Academy
                </a>{" "}
                (coding boot camp) cohort to share study resources. This was a
                group project and was completed in a 2-week sprint. The app uses
                React, TypeScript, Node.js, PostgreSQL and Express.
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
                  Normalisation and creating and querying from relational
                  databases.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Using Kanban board and agile practices.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Creating and maintaining end-to-end tests using cypress.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Resolving Git merge conflicts.
                </li>
              </ul>
              <ul className="links-list">
                <li className="links-list__item">
                  <a
                    href="https://ultimate-study-buddy.netlify.app/"
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
                    href="https://workable-dentist-613.notion.site/Study-Buddy-App-e6f351a062d64e8c839b874f5434e4c7"
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
                    href="https://github.com/temlabs/study-resource-catolog-app-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="iconify iconify-link"
                      data-icon="bx:code-alt"
                    ></span>
                    Front-end
                  </a>
                </li>
                <li className="links-list__item">
                  <a
                    href="https://github.com/temlabs/study-resource-catalog-app-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="iconify iconify-link"
                      data-icon="bx:code-alt"
                    ></span>
                    Back-end
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img src={study_buddy} alt="study budy app screen shot" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
