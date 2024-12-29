//CHECK HAND

import { convertCards } from "./convertCards";

export function noTie(tieArray, winner) {
  console.log(tieArray);
  let highObj = {}

  tieArray.forEach((obj) => {
    console.log(winner.winPlayer)
    console.log(obj.player)
    console.log(obj.hand)
    if(winner.winPlayer === obj.player){
      highObj = {...obj, 
        hand: winner.hand
      }
    }
  });

  console.log(highObj)
  return highObj;


}

export function pairTie(tieArray) {
  let player1Obj = tieArray[0];
  let player2Obj = tieArray[1];
  let player3Obj = tieArray[2];
  let player4Obj = tieArray[3];

  //have objects
  //need to look at pair1Number
  let compareArr = [];

  //set high card, making sure high card isn't included in pair

  tieArray.forEach((obj) => {
    if (obj.pair === true) {
      let cardNumber = convertSend(obj.pair1Number);
      if (obj.highCard === obj.pair1Number) {
        obj.highCard = obj.descendArr[2];
      }
      compareArr.push({
        pairNumber: obj.pair1Number,
        highCard: obj.highCard,
        player: obj.player,
        hand: "pair of " + cardNumber + "s",
        descendArr: obj.descendArr,
        highCardWin: 0,
      });
    }
  });

  let highObj = {};
  let highPairNum = 0;
  let highCardNum = 0;
  let highCardObj = 0;
  let currDescArr = [];

  /*
  for(let i=0; i< currDescArr.length; i++){
    if(currDescArr[i] === highObj.pairNumber){
      continue;
    } else {
      highObj.highCard = currDescArr[i];
    }
  }
*/
  console.log(compareArr);

  const pairArr = [];

  compareArr.forEach((compObj) => {
    if (compObj.pairNumber > highPairNum) {
      highObj = { ...compObj };
      highPairNum = compObj.pairNumber;
      highCardNum = compObj.highCardNum;
      pairArr.push(highObj);
      currDescArr = compObj.descendArr;
    } else if (compObj.pairNumber === highPairNum) {
      if (compObj.highCard > highCardNum) {
        if (highObj.highCard < compObj.highCard) {
          highObj = { ...compObj };
          highCardObj = compObj.highCard;
          currDescArr = compObj.descendArr;
          compObj.highCardWin = compObj.highCard;
        }
      } else if (compObj.highCard === highCardNum) {
        for (let k = 0; k < currDescArr.length; k++) {
          if (compObj.descendArr[k] > currDescArr[k]) {
            highObj = { ...compObj };
            highCardObj = compObj.highCard;
            currDescArr = compObj.descendArr;
            compObj.highCardWin = currDescArr[k];
          }
        }
      }
    }
  });

  let highCardWinText = convertSend(highObj.highCardWin);
  let highCardText = convertSend(highObj.highCard);

  highObj.highCardWin = highCardWinText;
  highObj.highCard = highCardText;

  console.log(highObj);

  return highObj;

  //if 3 hands are tied with different pairs, we know which pair is the highest
  //however, if the pairs are the same, we need to look at high card
}

function convertSend(highObj1) {
  let { cardNumber } = convertCards(highObj1);

  return cardNumber;
}

export function twoPairTie(tieArray) {
  console.log(tieArray);

  let compareArr = [];

  tieArray.forEach((obj) => {
    if (obj.twoPair === true) {
      let cardNumber1 = convertSend(obj.pair1Number);
      let cardNumber2 = convertSend(obj.pair2Number);
      console.log(obj.highCard);
      console.log(obj.pair1Number);
      console.log(obj.descendArr);
      if (obj.highCard === obj.pair1Number) {
        obj.highCard = obj.descendArr[4];
      }
      compareArr.push({
        pair1Number: obj.pair1Number,
        pair2Number: obj.pair2Number,
        highCard: obj.highCard,
        player: obj.player,
        hand: "two pair - " + cardNumber1 + "s and " + cardNumber2 + "s",
        descendArr: obj.descendArr,
        highCardWin: 0,
      });
    }
  });

  let highPairNum = 0;
  let highObj = {};

  compareArr.forEach((compObj) => {
    if (compObj.pair1Number > highPairNum) {
      highObj = { ...compObj };
      highPairNum = compObj.pair1Number;
    } else if (compObj.pair1Number === highPairNum) {
      if (compObj.pair2Number > highPairNum) {
        highObj = { ...compObj };
        highPairNum = compObj.pair2Number;
      }
    }
  });
  console.log(highObj);
  return highObj;
}

export function threeOfAKindTie() {}

export function straightTie() {}

export function flushTie() {}

export function fullHouseTie() {}

export function fourOfAKindTie() {}

export function straightFlushTie() {}
