import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
import { pairTie } from "./calcTie.js";
export function deal() {
  let cardObject = {
    sevenCards: [],
    topFiveCards: [],
    highCard: 0,
    pair: false,
    twoPair: false,
    threeOfAKind: false,
    fullHouse: false,
    fourOfAKind: false,
    straight: false,
    flush: false,
    straightFlush: false,
    royalFlush: false,
  };

  //get all the cards to be dealt to players
  let cards = getCards();

  //deal 2 cards to each player
  let player1Cards = cards.splice(0, 2);
  let player2Cards = cards.splice(0, 2);
  let player3Cards = cards.splice(0, 2);
  let player4Cards = cards.splice(0, 2);

  //deal remaining 5 cards to communal
  let communal = cards.slice();

  //set unrealized hand (all 7 cards)
  let player1Hand = player1Cards.concat(communal);
  let player2Hand = player2Cards.concat(communal);
  let player3Hand = player3Cards.concat(communal);
  let player4Hand = player4Cards.concat(communal);

  //send unrealized hand to check pair
  let pairObject1 = checkPair(player1Hand);
  let pairObject2 = checkPair(player2Hand);
  let pairObject3 = checkPair(player3Hand);
  let pairObject4 = checkPair(player4Hand);

  let strFlushObj1 = checkStraightFlush(player1Hand);
  let strFlushObj2 = checkStraightFlush(player2Hand);
  let strFlushObj3 = checkStraightFlush(player3Hand);
  let strFlushObj4 = checkStraightFlush(player4Hand);

  console.log(pairObject1, strFlushObj1);
  console.log(pairObject2, strFlushObj2);
  console.log(pairObject3, strFlushObj3);
  console.log(pairObject4, strFlushObj4);

  //returns the HAND based on 2 objects, not the number
  let playerScore1 = calculateScore(pairObject1, strFlushObj1);
  let playerScore2 = calculateScore(pairObject2, strFlushObj2);
  let playerScore3 = calculateScore(pairObject3, strFlushObj3);
  let playerScore4 = calculateScore(pairObject4, strFlushObj4);

  let scoreObjP1 = {};
  let scoreObjP2 = {};
  let scoreObjP3 = {};
  let scoreObjP4 = {};

  let cards2 = player1Cards.concat(
    player2Cards,
    player3Cards,
    player4Cards,
    communal
  );

  //returns the {score_numbers, player} object
  let { scores } = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  let { scoresNum } = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  let { scoreObjArr } = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  scores.forEach((score) => {
    if (score.player === "player1") {
      scoreObjP1 = { ...pairObject1, ...strFlushObj1, ...score };
    }
    if (score.player === "player2") {
      scoreObjP2 = { ...pairObject2, ...strFlushObj2, ...score };
    }
    if (score.player === "player3") {
      scoreObjP3 = { ...pairObject3, ...strFlushObj3, ...score };
    }
    if (score.player === "player4") {
      scoreObjP4 = { ...pairObject4, ...strFlushObj4, ...score };
    }
  });

  console.log(scoreObjP1)

  //now you have the pair and flush objects
  //and you have object w. player & numeric score
  //need to combine all three objects

  //scores.values.sort((a, b) => a - b);

  //console.log(scoreObjP1);

  for (let k = 0; k < scoresNum.length; k++) {
    //check for tie between first and second element
    if (scoresNum[k] === scoresNum[k + 1] && scoresNum[k] === 0) {
      switch (scoresNum[k]) {
        case 1:
          pairTie();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;

        default:
          break;
      }
    }
  }

  let { winner } = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  return { cards2, winner };
}

export default deal;
