import "./hero.scss";
import Topnav from "../topnav/Topnav";
import Nav from "../nav/Nav";
import Hcontent from "../hcontent/Hcontent";

export default function Hero() {
  return (
    <div className="hero w-100">
      <Topnav />
      <Nav />
      <Hcontent />
    </div>
  );
}
