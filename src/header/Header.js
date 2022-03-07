import "./Header.css"

import soulLogo from "../image/LOGO-SOUL-CLASS-BRANCA.png";

import react from "react";

export function Header(){
  return (
    <header className="sale-header">
        <h1>
          <img src={soulLogo} className="soulClassLogo" alt="SoulClass logo" />
        </h1>
        <ul className="header-nav">
          <li id="login-button">ENTRAR</li>
          <li id="redirect-button">ASSINE AGORA</li>
        </ul>
    </header>
  );
}