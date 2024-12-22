import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";

function App() {
  let dealtCards;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //dealtCards = getCards();
    //setCards(getCards());
  }, []);

  let cards1 = getCards();

  let hasPair;

  console.log(cards1);

  //hasPair = checkPair(cards1);

  let sortCards = checkStraightFlush(cards1);

  console.log(sortCards);

  return (
    <>
      <div className="mainContain">
        <div className="dealerCards">
          <div className="dealerCard1">dealer 1</div>
          <div className="dealerCard1">dealer 2</div>
          <div className="dealerCard1">dealer 3</div>
          <div className="dealerCard1">dealer 4</div>
          <div className="dealerCard1">dealer 5</div>
        </div>
        <div className="playerCards">
          <div className="playerCard">myCard 1</div>
          <div className="playerCard">myCard 2</div>
        </div>
      </div>
    </>
  );
}

export default App;
