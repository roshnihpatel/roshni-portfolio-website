import { Main } from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioApp } from "./components/MyWorkPages/PortfolioApp";
import { CreativeCodingCrystals } from "./components/MyWorkPages/CreativeCodingCrystals";
import { DogApp } from "./components/MyWorkPages/DogApp";
import { StudyBuddy } from "./components/MyWorkPages/StudyBuddy";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/portfolio-app" element={<PortfolioApp />} />
          <Route path="/study-budy" element={<StudyBuddy />} />
          <Route
            path="/creative-coding-crystals"
            element={<CreativeCodingCrystals />}
          />
          <Route path="/dog-voting-app" element={<DogApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
