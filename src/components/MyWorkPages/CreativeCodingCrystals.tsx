import { Footer } from "../Footer";
import creative_coding from "../images/creative-coding.png";
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
                <strong> Crystals </strong>
              </h1>
              <p className="section--subtitle">p5.js creative coding project</p>
              <p className="project-info">
                This is a personal creative coding project I completed by
                following a tutorial by{" "}
                <a
                  href="https://github.com/matthewepler/Generative-Design-Systems-with-P5js"
                  target="_blank"
                  rel="noreferrer"
                  className="project-info__link"
                >
                  Mathew Epler{" "}
                </a>{" "}
                using the p5.js library. This project is my first introduction
                to generative design and object-oriented programming and I found
                the process both educational and enjoyable.
                <br />
                <br />
                The main things I learned from this project are e
              </p>
              <ul className="learned-list">
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  How to use classes in JavaScript to write OOP
                </li>
                <li className="learned-list__item">
                  <span
                    className="iconify iconify-chevron"
                    data-icon="ci:chevron-right"
                  ></span>
                  Understanding and using inheritance to reuse code
                </li>
              </ul>
              <ul className="links-list">
                <li className="links-list__item">
                  <a
                    href="https://openprocessing.org/sketch/1559931"
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
              <img
                src={creative_coding}
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
