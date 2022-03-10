import "./Pricing.css"

import normal_value from "../image/Sem-Título-1-Recuperado_12.png";
import promotional_value from "../image/Sem-Título-1-Recuperado_04.png";
import soul_logos from "../image/Sem-Título-1-Recuperado_08.png";

export function Pricing(){
  return(
    <div className="Pricing-body">
      <div className="Pricing-Offer" id="idPromotional-anual-value">
        <h2>Comece a expandir agora</h2>
        <p>Tenha acesso imediato ao conteúdo mais completo sobre conhecimentos produnfos, Cursos, E-Books, Séries e muito mais</p>
      </div>
      <div className="Pricing-infos">
        <div className="normal-anual-value">
          <img src={normal_value} alt="" />
          <div className="normal-anual-price">
            <div className="anual-title">
              <h3>VALOR ANUAL</h3>
            </div>
          </div>

          <div className="soul-logos">
            <img src={soul_logos} alt="" />
          </div>

          <div className="normal-anual-buy-button">
            ASSINE <span style={{fontWeight: '700', fontSize:'1.3rem'}}>AGORA</span>
          </div>
        </div>
        <div className="promotional-anual-value" >
          <img src={promotional_value} className="promotional-anual-background" alt="" />
          <div className="normal-anual-price" style={{transform: 'scale(1)'}}>
            <div className="anual-title">
              <h3>VALOR ATÉ <span style={{fontWeight: '700'}}>30/08</span></h3>
            </div>
          </div>

          <div className="soul-logos">
            <img src={soul_logos} alt="" />
          </div>

          <a onclick="return false;" href="https://pay.hotmart.com/I67948292M?checkoutMode=2" class="hotmart-fb promotional-anual-buy-button">ASSINE <span style={{fontWeight: '700', fontSize:'1.3rem'}}>AGORA</span></a>
            <small>PAGAMENTO 100% SEGURO</small>
        </div>
      </div>
    </div>
  );
}