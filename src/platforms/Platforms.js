import "./Platforms.css"

import mediatypes from "../image/mediatypes.png"

export function Platforms(){
  return (
    <div className="mediatypes">
      <div className="mediaTypes-info">
        <h2>ASSISTA DO <br /> SEU JEITO</h2>
        <p>
          Aproveite a tela grande da TV ou assista no tablet, laptop, celular e
          outros aparelhos. <br />
          Nossa coleção de <strong>Títulos 4k</strong> não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.
        </p>
        <a href="#" className="action-call-02">ASSINE AGORA</a>
        <div>
          <div>
            teste
          </div>
          <small></small>
        </div>
      </div>
      <div className="mediaTypes-ilustration">
        <img src={mediatypes} alt="" />
      </div>
    </div>
  );
}