export function MyLang(): JSX.Element {
  return (
    <section className="my-languages bg-light" id="MyLang">
      <div className="container">
        <div className="split">
          <div>
            <img
              src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="close up on screen with code "
            />
          </div>
          <div>
            <h2 className="section--title section--title--narrow">
              My Languages/Technologies
            </h2>
            <ul className="languages-list">
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="cib:typescript"
                ></span>
                TypeSctript
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="fa-brands:js"
                ></span>
                JavaSctript
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:react-fill"
                ></span>
                React
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:html-fill"
                ></span>
                HTML
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:css-fill"
                ></span>
                CSS
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="bxl:nodejs"
                ></span>
                Node.js
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:github-fill"
                ></span>
                GitHub
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:bootstrap-fill"
                ></span>
                Bootstrap
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="bx:code-alt"
                ></span>
                Express
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="dashicons:database"
                ></span>
                SQL
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="akar-icons:postgresql-fill"
                ></span>
                PostgreSQL
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="bxl:netlify"
                ></span>
                Netlify
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="bxl:heroku"
                ></span>
                Heroku
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="simple-icons:cypress"
                ></span>
                Cypress
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="file-icons:jest"
                ></span>
                Jest
              </li>
              <li className="langauges-list__item">
                <span
                  className="iconify language-list__icon"
                  data-icon="cib:postman"
                ></span>
                PostMan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
