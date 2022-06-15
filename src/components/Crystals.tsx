import crystal_1 from "../images/1-crystal.png";
import crystal_2 from "../images/2-crystal.png";
import crystal_3 from "../images/3-crystal.png";
import crystal_4 from "../images/4-crystal.png";
import crystal_5 from "../images/5-crystal.png";
import crystal_6 from "../images/6-crystal.png";
import crystal_7 from "../images/7-crystal.png";
import crystal_8 from "../images/8-crystal.png";

export function Crystals(): JSX.Element {
  return (
    <div className="crystals">
      <div className="crystal-container">
        <img className="crystal" src={crystal_1} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_2} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_3} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_4} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_5} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_6} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_7} alt="" />
      </div>
      <div className="crystal-container">
        <img className="crystal" src={crystal_8} alt="" />
      </div>
    </div>
  );
}
