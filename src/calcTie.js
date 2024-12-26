//CHECK HAND

import { convertCards } from "./convertCards";

export function pairTie(tieArray) {
  let player1Obj = tieArray[0];
  let player2Obj = tieArray[1];
  let player3Obj = tieArray[2];
  let player4Obj = tieArray[3];

  //have objects
  //need to look at pair1Number
  let compareArr = [];

  tieArray.forEach((obj) => {
    if (obj.pair === true) {
        let {cardNumber} = convertCards(obj.pair1Number)
      compareArr.push({
        pairNumber: obj.pair1Number,
        highCard: obj.highCard,
        player: obj.player,
        hand: "pair of " + cardNumber + 's',
      });
    }
  });

  let highObj = {};
  let highObjNum = 0;
  let highCardNum = 0;
  let highCardObj = 0;

  console.log(compareArr);

  compareArr.forEach((compObj) => {
    if (compObj.pairNumber > highObjNum) {
      highObj = { ...compObj };
      highObjNum = compObj.pairNumber;
    } else if (compObj.pairNumber === highObjNum){
      if (compObj.highCard > highCardNum) {
        highObj = { ...compObj };
        highCardObj = compObj.highCard
      }
    }
  });

  console.log(highObj);

  return highObj;

  //if 3 hands are tied with different pairs, we know which pair is the highest
  //however, if the pairs are the same, we need to look at high card
}

export function twoPairTie() {}

export function threeOfAKindTie() {}

export function straightTie() {}

export function flushTie() {}

export function fullHouseTie() {}

export function fourOfAKindTie() {}

export function straightFlushTie() {}
