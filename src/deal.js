import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
import { flushTie, fourOfAKindTie, fullHouseTie, pairTie, straightTie, threeOfAKindTie, twoPairTie } from "./calcTie.js";
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

  let tieArraySendIt = [];

  scores.forEach((score) => {
    if (score.player === "player1") {
      scoreObjP1 = { ...pairObject1, ...strFlushObj1, ...score };
      tieArraySendIt.push(scoreObjP1);
    }
    if (score.player === "player2") {
      scoreObjP2 = { ...pairObject2, ...strFlushObj2, ...score };
      tieArraySendIt.push(scoreObjP2);
    }
    if (score.player === "player3") {
      scoreObjP3 = { ...pairObject3, ...strFlushObj3, ...score };
      tieArraySendIt.push(scoreObjP3);
    }
    if (score.player === "player4") {
      scoreObjP4 = { ...pairObject4, ...strFlushObj4, ...score };
      tieArraySendIt.push(scoreObjP4);
    }
  });

  //console.log(tieArraySendIt)

  //now you have the pair and flush objects
  //and you have object w. player & numeric score
  //need to combine all three objects

  //scores.values.sort((a, b) => a - b);

  //console.log(scoreObjP1);

  console.log(scoresNum)

  let winner = {};

  for (let k = 0; k < scoresNum.length; k++) {
    //check for tie between first and second element
    if (scoresNum[k] === scoresNum[k + 1] && k===0){
      switch (scoresNum[k]) {
        case 1:
          winner = pairTie(tieArraySendIt);
          break;
        case 2:
          winner = twoPairTie(tieArraySendIt);
          break;
        case 3:
          threeOfAKindTie(tieArraySendIt);
          break;
        case 4:
          straightTie(tieArraySendIt);
          break;
        case 5:
          flushTie(tieArraySendIt);
          break;
        case 6:
          fullHouseTie(tieArraySendIt);
          break;
        case 7:
          fourOfAKindTie(tieArraySendIt);
          break;
        default:
          break;
      }
    }
  }

  /*
  let { winner } = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );
  */

  return { cards2, winner };
}

export default deal;
