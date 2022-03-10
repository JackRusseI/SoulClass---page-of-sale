import "./FirstOffer.css"

import head_image from "../image/head.png"
import experts_image from "../image/experts.png"
import { useState } from "react";

export function FirstOffer(){
  return(
    <section className="FO-background">
      <div className="head">
        <img src={head_image} alt="" />
        <div className="experts">
          <img src={experts_image} alt="" />
        </div>
        <div className="text">
          <h1>UM UNIVERSO NOVO <br /> TE ESPERA</h1>
          <p>Conheça a SoulClass, e <br />expanda seu conhecimento</p>
          <a className="actin-call-01" id="assinacture" >ASSINE AGORA</a>
          <small>*aplicável ao plano anual com o pagamento antecipado.</small>
        </div>
      </div>
    </section>
  );
}