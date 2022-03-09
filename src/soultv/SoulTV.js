import "./SoulTV.css"

import soulTV from "../image/Sem-Título-1-Recuperado_03.png";
import SoulTV_Logo from "../image/SoulTV.png"
import Series_card from "../image/SERIES.png"

export function SoulTV(){
  return(
    <div className="SoulTV-Body">
      <div className="SoulTV-Image">
        <img src={soulTV} alt="" />
      </div>
      <div className="SoulTV-Infos">
        <div>
          <img src={SoulTV_Logo} alt="" />
          <p>Na SoulTv você vai poder acompanhar lives semanais com diversos especialistas dos mais variados temas, e ainda poderá interagir no nosso chat com pessoas de todo Mundo!</p>
          <img src={Series_card} id="SoulSeriesCard" alt="" />
        </div>
      </div>  
    </div>
  );
}