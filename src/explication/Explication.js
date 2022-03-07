import { Card } from "./card/Cards";

import card_image from "../image/1_02.png"
import  Card2  from "../image/card2.png";
import  Card3  from "../image/card3.png";
import  Card4  from "../image/card4.png";
import  Card5  from "../image/card5.png";
import  Card6  from "../image/card6.png";

import "./Explication.css";

export function Explication(){
  const cards = [card_image, Card2, Card3, Card4, Card5, Card6];
  const listCards = cards.map((card) => <Card card_img={card} />);
  return (
    <div className="main-div-explication">
      <p id="explication-title">
        uma plataforma de conteúdos voltados para a{" "}
        <strong>expansão da consciência</strong>, <br /> com o intuito de ajudar
        as pessoas no processo de autoconhecimento e evolução.
      </p>
      <div className="soulclass-platform-itens">
        {listCards}
      </div>
    </div>
  );
}