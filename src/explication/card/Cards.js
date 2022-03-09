import "./Card.css";

export function Card(props){
  return(
    <div className="apresentation-card">
        <div className="filter"></div>
        <img src={props.card_img} alt="" />
    </div>
  );
}