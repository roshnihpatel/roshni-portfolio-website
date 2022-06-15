import { Link } from "react-router-dom";

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
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="plan of app on paper"
              />
            </Link>
          </div>

          <div className="portfolio__item">
            <Link to="dog-voting-app">
              <img
                className="portfolio__img"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="plan of app on paper"
              />
            </Link>
          </div>
          <div className="portfolio__item">
            <Link to="study-budy">
              <img
                className="portfolio__img"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="plan of app on paper"
              />
            </Link>
          </div>
          <div className="portfolio__item">
            <Link to="creative-coding-crystals">
              <img
                className="portfolio__img"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="plan of app on paper"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
