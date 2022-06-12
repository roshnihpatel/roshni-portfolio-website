import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MyWork } from "./MyWork";
import {MyLang} from "./MyLang"

export function Main(): JSX.Element {
  return (
    <>
      
      <Header />
      <AboutMe />
      <MyLang/>
      <MyWork />
      <Footer />
    </>
  );
}
