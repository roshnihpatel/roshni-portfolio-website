import { Link } from "react-router-dom";

import creative_coding from "./images/creative-coding.png";
import dog_app from "./images/dog-app.png";
import study_budy from "./images/study-buddy.png";
import portfolio from "./images/portfolio.png";

export function MyWork(): JSX.Element {
  return (
    <section className="my-work bg-dark" id="MyWork">
      <div className="container">
        <div className="my-work-text">
          <h2 className="section--title">My Work</h2>
          <p className="section--subtitle">Check out my projects</p>
        </div>
        <div className="portfolio">
          <div className="portfolio__item">
            <Link to="portfolio-app">
              <img
                className="portfolio__img"
                src={portfolio}
                alt="portfolio app screen shot"
              />
            </Link>
          </div>

          <div className="portfolio__item">
            <Link to="dog-voting-app">
              <img
                className="portfolio__img"
                src={dog_app}
                alt="dog-app screen shot"
              />
            </Link>
          </div>
          <div className="portfolio__item">
            <Link to="study-budy">
              <img
                className="portfolio__img"
                src={study_budy}
                alt="study buddy app screen shot"
              />
            </Link>
          </div>
          <div className="portfolio__item">
            <Link to="creative-coding-crystals">
              <img
                className="portfolio__img"
                src={creative_coding}
                alt="creative coding crystals screen shot"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
