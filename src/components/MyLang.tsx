export function MyLang():JSX.Element{
    return(
        <section className="my-languages bg-light">
        <div className="container">
            <div className="split">
                <div>
                    <img
                      src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="close up on screen with code "
                    />
                </div>
                <div>
                    <h2 className="section--title section--title--narrow">My Languages/Technologies</h2>
                    <ul className="languages-list">
                      <li className="langauges-list__item"><i className="fa-brands fa-js language-list__icon"></i>TypeSctript</li>
                      <li className="langauges-list__item">
                        <i className="fa-brands fa-js language-list__icon"></i>JavaSctript
                      </li>
                      <li className="langauges-list__item">
                        <i className="fa-brands fa-react language-list__icon"></i>React
                      </li>
                      <li className="langauges-list__item">
                        <i className="fa-brands fa-html5 language-list__icon"></i>HTML
                      </li>
                      <li className="langauges-list__item">
                        <i className="fa-thin fa-code language-list__icon"></i>CSS
                      </li>
                      <li className="langauges-list__item">
                        <i className="fa-thin fa-code language-list__icon"></i>GitHub
                      </li>
                      <li className="langauges-list__item">
                        <i className="fa-brands fa-bootstrap language-list__icon"></i>
                        Bootstrap
                      </li>
                    </ul>
                </div>
                
            </div>
        </div>
      </section>
    )
}