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
              Having just completed a coding boot camp (
              <a
                href="https://academy.tech/"
                target="_blank"
                rel="noreferrer"
                className="project-info__link"
              >
                Academy
              </a>{" "}
              ) I am eager to continue my tech journey. I have a background in
              chemistry but I was motivated to start a career in tech because I
              felt like I was joining a fast-growing and exciting industry with
              many opportunities to learn. I knew I could bring and develop the
              problem-solving and analytical skills that I used in my degree and
              also practise using my creativity and collaboration skills.
              <br />
              <br />I have really enjoyed learning how to code and am excited to
              continue learning and applying what I have learnt in a working
              envionment.
            </p>
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
  );
}
