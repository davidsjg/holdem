import { getCards } from "./getCards.js";
import { checkPair, checkStraightFlush } from "./checkHand.js";
import { calculateScore } from "./calculateScore.js";
import { calculateWinner } from "./calculateWinner.js";
export function deal() {
    let cards = getCards();
    console.log(cards)
    let player1Cards = cards.splice(0, 2);
    let player2Cards = cards.splice(0, 2);
    let player3Cards = cards.splice(0, 2);
    let player4Cards = cards.splice(0, 2);
    let communal = cards.slice();
  
    let player1Hand = player1Cards.concat(communal);
    let player2Hand = player2Cards.concat(communal);
    let player3Hand = player3Cards.concat(communal);
    let player4Hand = player4Cards.concat(communal);
  
    let pairObject1 = checkPair(player1Hand);
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

    let scores = []
    scores.push(playerScore1)
    scores.push(playerScore2)
    scores.push(playerScore3)
    scores.push(playerScore4)

    let cards2 = player1Cards.concat(player2Cards, player3Cards, player4Cards, communal)
  
    
    let winner = calculateWinner(
      playerScore1,
      playerScore2,
      playerScore3,
      playerScore4
    );
    

    console.log(scores)

    return {cards2, scores, winner} ;

 }

 export default deal;