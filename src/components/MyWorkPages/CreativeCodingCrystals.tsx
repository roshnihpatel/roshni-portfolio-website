import { Footer } from "../Footer";

import { Link } from "react-router-dom";
import { Crystals } from "../Crystals";

export function CreativeCodingCrystals(): JSX.Element {
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

      <section className="project-page creative-coding bg-mid">
        <div className="container">
          <div className="split">
            <div>
              <h1 className="section--title">
                <strong>Creative Coding </strong>
              </h1>
              <p className="section--subtitle">Full-Stack Developer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="links-list">
                <li className="links-list__item">
                  <span
                    className="iconify iconify-link"
                    data-icon="fluent:app-generic-20-filled"
                  ></span>
                  App
                </li>

                <li className="links-list__item">
                  <span
                    className="iconify iconify-link"
                    data-icon="carbon:document"
                  ></span>
                  Documentation
                </li>
                <li className="links-list__item">
                  <span
                    className="iconify iconify-link"
                    data-icon="bx:code-alt"
                  ></span>
                  Code
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
