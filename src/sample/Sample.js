import "./Sample.css";

export function Sample(){
  return(
    <div className="sample-body">
      <h2>Digite seu e-mail para iniciar sua <span style={{color: '#BDE4DF'}}>avaliação gratuita</span></h2>
      <p>Se você ainda não se convenceu, informe se e-mail e te enviaremos agora, <br /> sem compromisso, uma das nossas melhores aulas.</p>
      <div className="sample-inputs">
        <input type="text" id="sample-email-input" placeholder="exemplo@gmail.com" />
        <input type="button" id="sample-button-input" value="Saiba Mais" />
      </div>

      <div className="FAQ">
        <h2>Perguntas Frequentes</h2>
        <p>Clique no botão abaixo para ver as perguntas mais frequentes sobre assinatura</p>
        <a href="" id="FAQ-button">Saiba Mais</a>
      </div>
    </div>
  );
}