import "./App.css";
import { useState, useEffect } from "react";
import myArray from "./masterArr.js";
import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { deal } from "./deal.js";
import { calculateWinner } from "./calculateWinner.js";

import PlayerCards from "./Card/Card.js";
import Card2 from "./Card2/Card2.js";

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
  const [winnerContain, setWinnerContain] = useState();
  const [refresh1, setRefresh1] = useState();
  const [flop, setFlop] = useState();
  const [turn, setTurn] = useState();
  const [river, setRiver] = useState();
  const [compCardsContainer, setCompCardsContainer] = useState();
  const [buttonDisplay, setButtonDisplay] = useState("Click to Play");
  let testVal = {
    suit: "clubs",
    number: 2,
  };
  let buttonArr = ["Show Flop", "Show Turn", "Show River", "Play Again"];

  function playCards() {
    setCountClick(countClick + 1);

    setButtonDisplay(buttonArr[0]);

    if (countClick === 0) {
      let { cards2, scores, winner } = deal();
      setCards(cards2);
      setPlayer1Cards(cards2.splice(0, 2));
      setPlayer2Cards(cards2.splice(0, 2));
      setPlayer3Cards(cards2.splice(0, 2));
      setPlayer4Cards(cards2.splice(0, 2));
      setCommunal(cards2.slice());

      setWinner(winner);
      setWinnerContain("winner1");
      setFlop("flop1");
      setTurn("turn1");
      setRiver("river1");
    } else if (countClick === 1) {
      setButtonDisplay(buttonArr[1]);
      setFlop("flop2");
    } else if (countClick === 2) {
      setTurn("turn2");
      setButtonDisplay(buttonArr[2]);
    } else if (countClick === 3) {
      setButtonDisplay(buttonArr[3]);
      setRiver("river2");
      setWinnerContain("winner2");
    }

    if (countClick === 4) {
      setCards([]);
      setPlayer1Cards([]);
      setPlayer2Cards([]);
      setPlayer3Cards([]);
      setPlayer4Cards([]);
      setWinner({});
      window.location.reload(true);
      setCountClick(0);
    }
  }

  return (
    <>
      {" "}
      <div className="mainContain">
        {cards.length > 0 ? (
          <>
            <div className="playerCardsParent1">
              <div className="playerCards">
                <PlayerCards value={player3Cards[0]} />
                <PlayerCards value={player3Cards[1]} />
                <div className={winnerContain}>
                  {winner.winPlayer === "player3" && <>winner {winner.hand}</>}
                </div>
              </div>
            </div>
            <div className="centerContain">
              <div className="computerHand1">
                <PlayerCards value={player2Cards[0]} />
                <PlayerCards value={player2Cards[1]} />
                <div className={winnerContain}>
                  {winner.winPlayer === "player2" && <>winner {winner.hand}</>}
                </div>
              </div>
              <div className="communal">
                <div className="flopBoarder">
                  <div className={flop}>
                    <PlayerCards value={communal[0]} />
                  </div>
                </div>
                <div className="flopBoarder">
                  <div className={flop}>
                    <PlayerCards value={communal[1]} />
                  </div>
                </div>
                <div className="flopBoarder">
                  <div className={flop}>
                    <PlayerCards value={communal[2]} />
                  </div>
                </div>
                <div className="flopBoarder">
                  <div className={turn}>
                    <PlayerCards value={communal[3]} />
                  </div>
                </div>
                <div className="flopBoarder">
                  <div className={river}>
                    <PlayerCards value={communal[4]} />
                  </div>
                </div>
              </div>
              <div className="computerHand4">
                <PlayerCards value={player4Cards[0]} />
                <PlayerCards value={player4Cards[1]} />
                <div className={winnerContain}>
                  {winner.winPlayer === "player4" && <>winner {winner.hand}</>}
                </div>
              </div>
            </div>
            <div className="playerCardsParent">
              <div className="playerCards">
                <PlayerCards value={player1Cards[0]} />
                <PlayerCards value={player1Cards[1]} />
                <div className={winnerContain}>
                  {winner.winPlayer === "player1" && <>winner {winner.hand}</>}
                </div>
              </div>
            </div>
            <div className="buttonContain">
              <button className="button1" onClick={playCards}>
                {buttonDisplay}
              </button>
            </div>
          </>
        ) : (
          <div className="buttonContain">
            <button className="button1" onClick={playCards}>
              {buttonDisplay}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
