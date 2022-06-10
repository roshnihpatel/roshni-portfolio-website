import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MyWork } from "./MyWork";

export function Main(): JSX.Element {
  return (
    <>
      <h2>hello from main</h2>
      <Header />
      <AboutMe />
      <MyWork />
      <Footer />
    </>
  );
}
