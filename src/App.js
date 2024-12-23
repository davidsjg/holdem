import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { convertCards } from "./convertCards.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
import PlayerCards from "./Card/Card.js";

function App() {
  let dealtCards;
  //const [cards, setCards] = useState([]);

  useEffect(() => {
    //dealtCards = getCards();
    //setCards(getCards());
  }, []);

  let cards = getCards();

  //console.log(cards);

  let player1Cards = cards.splice(0, 2);
  let player2Cards = cards.splice(0, 2);
  let player3Cards = cards.splice(0, 2);
  let player4Cards = cards.splice(0, 2);
  let communal = cards.slice();

  console.log(player1Cards[0]);

  let player1Hand = player1Cards.concat(communal);
  let player2Hand = player2Cards.concat(communal);
  let player3Hand = player3Cards.concat(communal);
  let player4Hand = player4Cards.concat(communal);

  // console.log(player1Hand)

  let pairObject1 = checkPair(player1Hand);
  // console.log(pairObject1)

  let pairObject2 = checkPair(player2Hand);
  let pairObject3 = checkPair(player3Hand);
  let pairObject4 = checkPair(player4Hand);

  let strFlushObj1 = checkStraightFlush(player1Hand);
  let strFlushObj2 = checkStraightFlush(player2Hand);
  let strFlushObj3 = checkStraightFlush(player3Hand);
  let strFlushObj4 = checkStraightFlush(player4Hand);

  let playerScore1 = calculateScore(pairObject1, strFlushObj1);
  let playerScore2 = calculateScore(pairObject2, strFlushObj2);
  let playerScore3 = calculateScore(pairObject3, strFlushObj3);
  let playerScore4 = calculateScore(pairObject4, strFlushObj4);

  let winner = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  console.log(winner);
  return (
    <>
      <div className="playerCardsParent">
        <div className="playerCards">
          <PlayerCards value={player3Cards[0]} />
          <PlayerCards value={player3Cards[1]} />
        </div>
      </div>
      <div className="centerContain">
        <div className="computerHand1">
          <PlayerCards value={player2Cards[0]} />
          <PlayerCards value={player2Cards[1]} />
        </div>
        <div className="communal">
          <PlayerCards value={communal[0]} />
          <PlayerCards value={communal[1]} />
          <PlayerCards value={communal[2]} />
          <PlayerCards value={communal[3]} />
          <PlayerCards value={communal[4]} />
        </div>
        <div className="computerHand1">
          <PlayerCards value={player4Cards[0]} />
          <PlayerCards value={player4Cards[1]} />
        </div>
      </div>
      <div className="playerCardsParent">
        <div className="playerCards">
          <PlayerCards value={player1Cards[0]} />
          <PlayerCards value={player1Cards[1]} />
        </div>
      </div>
    </>
  );
}

export default App;
