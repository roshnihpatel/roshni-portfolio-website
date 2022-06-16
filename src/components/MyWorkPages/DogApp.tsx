import { Footer } from "../Footer";

import { Link } from "react-router-dom";
import { Crystals } from "../Crystals";

export function DogApp(): JSX.Element {
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

      <section className="project-page dog-app bg-mid">
        <div className="container">
          <div className="split">
            <div>
              <h1 className="section--title">
                <strong>Dog Voting App</strong>
              </h1>
              <p className="section--subtitle">Full-Stack App</p>
              <p className="project-info">
                This dog voting app is the product of a 1-week sprint in a group
                project from the coding boot camp course I was part of (
                <a
                  href="https://academy.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-info__link"
                >
                  Academy
                </a>
                ). The app uses React, TypeScript, Node.js, PostgreSQL and
                Express.
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
                  Collaboratively maintaining project documentation.
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Express and Axios error handling
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Presenting code to team members in a concise and clear way
                </li>
              </ul>
              <ul className="links-list">
                <li className="links-list__item">
                  <a
                    href="https://saj-zeri-patelman-dogvotes.netlify.app/"
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
                    href="https://workable-dentist-613.notion.site/Dog-Voting-App-3b3a8ec976da4a5c8014f7b33cf6aa55"
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
                    href="https://github.com/sajsiv/DogBreedFrontend"
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
                    href="https://github.com/roshnihpatel/Dog-Breed-Voting-Backend"
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
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="laptop with code onscreen on a white desk with a desk plant"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
