import "./Card.css";
import { convertCards } from "../convertCards";
function Card(props) {
  let number1 = convertCards(props.value.number);
  let suit1 = props.value.suit
  let suit5= '';

  switch (suit1) {
    case 'diamond':
      suit5 = 'diamond'
      break;
  
    default:
      break;
  }
  return (
    <>
      <div className="cardContain">
        <div className="card1">
          <div>{number1}</div>
          <div className={suit1}>{suit1}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
