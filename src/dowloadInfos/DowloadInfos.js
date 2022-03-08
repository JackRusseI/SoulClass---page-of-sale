import "./DowloadInfos.css"

import documentary from "../image/DOCUMENTARIOS.png";
import banner_section from "../image/Sem-Título-1-Recuperado_09.png";

export function DowloadInfos(){
  return(
    <div className="DowloadInfos-body">
      <div className="DowloadInfos">
        <h2>Baixe documentários, séries e outros</h2>
        <p>Baixe e assista quando e onde quiser. <br /> Assim, seus favoritos estão sempre com você, até mesmo sem internet.</p>
        <img src={documentary} alt="" />
      </div>
      <div className="DowloadBanner">
        <img src={banner_section} alt="" />
      </div>
    </div>
  );
}