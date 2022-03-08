import "./Exclusive.css";

import background from "../image/Sem-Título-1-Recuperado_10.png"
import card1 from "../image/card2.png"
import card2 from "../image/card3.png"
import card3 from "../image/card4.png"
import card4 from "../image/card5.png"
import card5 from "../image/card6.png"
import SoulCursos from "../image/SoulCursos.png"
import SoulSounds from "../image/SoulKids.png"

export function Exclusive(){
  return (
    <div className="Exclusive-body">
      <h2>
        Aqui estão alguns dos nossos conteúdos exclusivos. Temos aulas ao vivo,
        cursos fechados Podcast e muito mais!
      </h2>
      <div className="exclusive-infos">
        <img src={background} alt="" />
        <div className="exclusive-courses">
          <div className="exclusive-series-card">
            <img src={card5} alt="" />
          </div>

          <div className="exclusive-series-card">
            <img src={card1} alt="" />
          </div>

          <div className="exclusive-series-card">
            <img src={card3} alt="" />
          </div>

          <div className="exclusive-series-card">
            <img src={card2} alt="" />
          </div>

          <div className="exclusive-series-card">
            <img src={card4} alt="" />
          </div>

          <div className="exclusive-description">
            <img src={SoulCursos} alt="" />
            <p>
              Cursos dos especialistas das mais variadas áreas. Aulas com alto
              nível de produção sobre diversos assuntos relacionados a expanção
              da consciência, onde você é ensinado por grandes Nomes!
            </p>
          </div>
        </div>

        <div className="exclusive-sounds">
          <div className="exclusive-sounds-card">
              <img src={card4} alt="" />
          </div>

          <div className="exclusive-sounds-card">
              <img src={card4} alt="" />
          </div>

          <div className="exclusive-sounds-card">
              <img src={card4} alt="" />
          </div>

          <div className="exclusive-sounds-card">
              <img src={card4} alt="" />
          </div>

          <div className="exclusive-sounds-card">
              <img src={card4} alt="" />
          </div>

          <div className="exclusive-description">
            <img src={SoulSounds} alt="" />
            <h3>Novidade!</h3>
            <p>
              Cursos dos especialistas das mais variadas áreas. Aulas com alto
              nível de produção sobre diversos assuntos relacionados a expanção
              da consciência, onde você é ensinado por grandes Nomes!
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}