import "./Header.css";

import soulLogo from "../image/LOGO-SOUL-CLASS-BRANCA.png";
import react,{ useState } from "react";

export function Header() {
  const [header, setHeader] = useState(false);
  const changebackground = () => {
    setHeader(window.scrollY > 100)
  }
  window.addEventListener("scroll" , changebackground)
  return (
    <header className={header ? "scrolled-header" : ""}>
      <h1>
        <img src={soulLogo} className="soulClassLogo" alt="SoulClass logo" />
      </h1>
      <ul className="header-nav">
        <li id="login-button">ENTRAR</li>
        <li id="redirect-button"><a href="#idPromotional-anual-value">ASSINE AGORA</a></li>
      </ul>
    </header>
  );
}
