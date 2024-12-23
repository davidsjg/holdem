import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { convertCards } from "./convertCards.js";
import { calculateScore } from "./calculateScore.js";

function App() {
  let dealtCards;
  //const [cards, setCards] = useState([]);

  useEffect(() => {
    //dealtCards = getCards();
    //setCards(getCards());
  }, []);

  let cards1 = getCards();

  //let cards = cards[0];

  let hasPair;
  //the first two cards are the players cards, mark them to send down
  //but send all 7 cards to the checks to find their best hand and return it

  //console.log(cards1);

  let pairObject = checkPair(cards1);

  let strFlushObj = checkStraightFlush(cards1);

  let finalScore = calculateScore(pairObject, strFlushObj);

  let playerCard1 = cards1[0];
  let playerCard2 = cards1[1];

  let playerCard1Number = convertCards(playerCard1.number);
  let playerCard2Number = convertCards(playerCard2.number);

  let dealCard1 = cards1[2];
  let dealCard2 = cards1[3];
  let dealCard3 = cards1[4];
  let dealCard4 = cards1[5];
  let dealCard5 = cards1[6];

  let deal1Number = convertCards(dealCard1.number);
  let deal2Number = convertCards(dealCard2.number);
  let deal3Number = convertCards(dealCard3.number);
  let deal4Number = convertCards(dealCard4.number);
  let deal5Number = convertCards(dealCard5.number);


  return (
    <>
      <div className="mainContain">
        <div className="dealerCards">
          <div className="dealerCard1">
            <div>{dealCard1.suit}</div>
            <div>{deal1Number}</div>
          </div>
          <div className="dealerCard1">
            <div>{dealCard2.suit}</div>
            <div>{deal2Number}</div>
          </div>
          <div className="dealerCard1">
            <div>{dealCard3.suit}</div>
            <div>{deal3Number}</div>
          </div>
          <div className="dealerCard1">
            <div>{dealCard4.suit}</div>
            <div>{deal4Number}</div>
          </div>
          <div className="dealerCard1">
            <div>{dealCard5.suit}</div>
            <div>{deal5Number}</div>
          </div>
        </div>
        <div className="playerCards">
        <div className="playerCard">
            <div>{playerCard1.suit}</div>
            <div>{playerCard1Number}</div>
          </div>
        <div className="playerCard">
            <div>{playerCard2.suit}</div>
            <div>{playerCard2Number}</div>
          </div>
        </div>
        <div className="score">
          {finalScore}
        </div>
      </div>
    </>
  );
}

export default App;
