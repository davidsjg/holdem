import "./PlayerCards.css";
function Card(props) {
  console.log(props.value);
  let number1 = props.value[0].number;
  let number2 = props.value[1].number;
  let suit1 = props.value[0].suit;
  let suit2 = props.value[1].suit;
  return (
    <>
      <div className="cardContain">
        <div className="card1">
          <div>{number1}</div>
          <div>{suit1}</div>
        </div>
        <div className="card1">
          <div>{number2}</div>
          <div>{suit2}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
