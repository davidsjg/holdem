import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { convertCards } from "./convertCards.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
import Card from './PlayerCards/PlayerCards.js'

function App() {
  let dealtCards;
  //const [cards, setCards] = useState([]);

  useEffect(() => {
    //dealtCards = getCards();
    //setCards(getCards());
  }, []);

  let cards = getCards();

  console.log(cards);

  let player1Cards = cards.splice(0,2)
  let player2Cards = cards.splice(0,2)
  let player3Cards = cards.splice(0,2)
  let player4Cards = cards.splice(0,2)
  let communal = cards.slice();

  console.log(player1Cards)

  let player1Hand = player1Cards.concat(communal);
  let player2Hand = player2Cards.concat(communal);
  let player3Hand = player3Cards.concat(communal);
  let player4Hand = player4Cards.concat(communal);

  console.log(player1Hand)

  let pairObject1 = checkPair(player1Hand);
  console.log(pairObject1)

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

  let winner = calculateWinner(playerScore1, playerScore2, playerScore3, playerScore4)

  console.log(winner);
  return (
    <>
    <div>
      <Card value={player1Cards} />
    </div>
    </>
  )


  //let cards = cards[0];

  let hasPair;
  //the first two cards are the players cards, mark them to send down
  //but send all 7 cards to the checks to find their best hand and return it

  //console.log(cards1);

  /*
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
            <div>{player1Cards[0].suit}</div>
            <div>{player1Cards[0].number}</div>
          </div>
        <div className="playerCard">
            <div>{player1Cards[1].suit}</div>
            <div>{player1Cards[1].number}</div>
          </div>
        </div>
        <div className="score">
          {finalScore}
        </div>
      </div>
    </>
  );
    */
}

export default App;
