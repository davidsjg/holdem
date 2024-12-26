import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
import { useState } from "react";
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
  }

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

  console.log(pairObject1, strFlushObj1)
  console.log(pairObject2, strFlushObj2)
  console.log(pairObject3, strFlushObj3)
  console.log(pairObject4, strFlushObj4)

  let playerScore1 = calculateScore(pairObject1, strFlushObj1);
  let playerScore2 = calculateScore(pairObject2, strFlushObj2);
  let playerScore3 = calculateScore(pairObject3, strFlushObj3);
  let playerScore4 = calculateScore(pairObject4, strFlushObj4);

  console.log(playerScore1)

  let scores = [];
  scores.push(playerScore1);
  scores.push(playerScore2);
  scores.push(playerScore3);
  scores.push(playerScore4);

  let cards2 = player1Cards.concat(
    player2Cards,
    player3Cards,
    player4Cards,
    communal
  );

  console.log(scores);

  let winner = calculateWinner(
    playerScore1,
    playerScore2,
    playerScore3,
    playerScore4
  );

  console.log(winner);


  return { cards2, scores, winner };
}

export default deal;
