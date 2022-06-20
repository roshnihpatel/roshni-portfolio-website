export function AboutMe(): JSX.Element {
  return (
    <section className="about-me bg-mid" id="AboutMe">
      <div className="container">
        <div className="split">
          <div>
            <h1 className="section--title">
              Hi, I'm <strong>Roshni</strong>
            </h1>
            <p className="section--subtitle">Full-Stack Developer</p>
            <p className="section--subtitle__description">
              I recently graduated from a coding boot camp (
              <a
                href="https://academy.tech/"
                target="_blank"
                rel="noreferrer"
                className="project-info__link"
              >
                Academy
              </a>{" "}
              ) and am looking forward to continuing my tech career. Despite my
              background in chemistry, I am passionate about joining the
              fast-growing tech industry with many opportunities to learn and
              grow. As I move forward, I intend to apply the problem-solving and
              analytical skills I developed in my degree and also practice my
              creativity and collaboration skills. Coding has been a valuable
              learning experience for me and I am eager to apply what I have
              learned in a working environment.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="laptop with code onscreen on a white desk with a desk plant"
              className="stock-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
