import "./Card.css";
import { convertCards } from "../convertCards";
function Card(props) {
  let {cardNumber, suit} = convertCards(props.value.number);
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
          <div>{cardNumber}</div>
          {suit1 === 'diamond' ? (
            <>
            ♦️
            </>
          ) :(<></>)}
          {suit1 === 'club' ? (
            <>
            ♣️
            </>
          ) :(<></>)}
          {suit1 === 'heart' ? (
            <>
            ❤️
            </>
          ) :(<></>)}
          {suit1 === 'spade' ? (
            <>
            ♠️
            </>
          ) :(<></>)}
        </div>
      </div>
    </>
  );
}

export default Card;
