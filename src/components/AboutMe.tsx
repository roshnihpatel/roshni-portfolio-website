export function AboutMe(): JSX.Element {
  return (
    <section className="about-me">
      <section className="intro">
        <h2 className="section--title">
          Hi, I'm <strong>Roshni</strong>
        </h2>
        <p className="section--subtitle">Full-Stack Developer</p>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="laptop with code onscree on a white desk with a desk plant"
        />
      </section>
      <section className="my-languages">
        <h2 className="section--title">My Languages/Technologies</h2>
        <ul className="languages-list">
          <li className="langauges-list__item">TypeSctript</li>
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
        <img
          src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="close up on screen with code "
        />
      </section>
    </section>
  );
}
