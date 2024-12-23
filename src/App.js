import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { deal } from "./deal.js";
import { calculateWinner } from "./calculateWinner.js";

import PlayerCards from "./Card/Card.js";

function App() {
  let dealtCards;
  const [countClick, setCountClick] = useState(0);
  const [cards, setCards] = useState([]);
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [player3Cards, setPlayer3Cards] = useState([]);
  const [player4Cards, setPlayer4Cards] = useState([]);
  const [communal, setCommunal] = useState([]);
  const [winner, setWinner] = useState({});
  const [refresh1, setRefresh1] = useState();

  useEffect(() => {
    //dealtCards = getCards();
    //setCards(getCards());
  }, [refresh1]);

  //console.log(cards);

  //

  function playCards() {
    console.log(countClick);

    setCountClick(countClick + 1);
    if (countClick  % 2 === 0) {
      let { cards2, scores, winner } = deal();
      console.log(cards2)
      setCards(cards2);
      setPlayer1Cards(cards2.splice(0, 2));
      setPlayer2Cards(cards2.splice(0, 2));
      setPlayer3Cards(cards2.splice(0, 2));
      setPlayer4Cards(cards2.splice(0, 2));
      setCommunal(cards2.slice());

      console.log(scores);

      setWinner(winner);


    }
    if (countClick  % 2 === 1){
      setCards([])
      setPlayer1Cards([]);
      setPlayer2Cards([]);
      setPlayer3Cards([]);
      setPlayer4Cards([]);
      setWinner({});
      window.location.reload(true); 
    }
  }

  return (
    <>
      {cards.length > 0 ? (
        <>
          <div className="playerCardsParent">
            <div className="playerCards">
              <PlayerCards value={player3Cards[0]} />
              <PlayerCards value={player3Cards[1]} />
              {winner.winPlayer === "player3" && <>winner {winner.hand}</>}
            </div>
          </div>
          <div className="centerContain">
            <div className="computerHand1">
              <PlayerCards value={player2Cards[0]} />
              <PlayerCards value={player2Cards[1]} />
              {winner.winPlayer === "player2" && <>winner  {winner.hand}</>}
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
              {winner.winPlayer === "player4" && <>winner {winner.hand}</>}
            </div>
          </div>
          <div className="playerCardsParent">
            <div className="playerCards">
              <PlayerCards value={player1Cards[0]} />
              <PlayerCards value={player1Cards[1]} />
              {winner.winPlayer === "player1" && <>winner {winner.hand}</>}
            </div>
          </div>
          <div className="buttonContain">
            <button className="button1" onClick={playCards}>
              Play Hand
            </button>
          </div>
        </>
      ) : (
        <div className="buttonContain">
        <button className="button1" onClick={playCards}>
          Play Hand
        </button>
      </div>
      )}
    </>
  );
}

export default App;
