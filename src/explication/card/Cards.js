import "./Card.css";

export function Card(props){
  return(
    <div className="apresentation-card">
        <img src={props.card_img} alt="" />
    </div>
  );
}