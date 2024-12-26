//CHECK HAND
export function checkPair(dealtCards) {
  let pairObject = {
    pair: false,
    twoPair: false,
    threeOfAKind: false,
    fullHouse: false,
    fourOfAKind: false,
    highCard: 0,
    pair1Number: 0,
    pair2Number: 0,
    threeOfAKindNumber: 0,
    fullHouseHighPair: 0,
    fullHousePair2: 0,
    fourOfAKindNumber: 0,
  };
  let pair = 0;
  let pair2 = 0;
  let twoPair = false;
  let bestPairPre = [];
  let bestPair = [];
  let matchedCards1 = [];
  let matchedCards2 = [];
  let matchedCards3 = [];
  let compareCards = dealtCards.slice();
  dealtCards.forEach((card1) => {
    for (let k = 0; k < compareCards.length; k++) {
      let card2 = compareCards[k];

      if (card1.number === card2.number && card1.suit !== card2.suit) {
        if (!bestPairPre.includes(card1)) {
          bestPairPre.push(card1);
          //setPlayer1Cards(cards2.splice(0, 2));
        }
      }

      if (card1.number === card2.number && card1.suit !== card2.suit) {
        if (matchedCards1.length === 0) {
          matchedCards1.push(card1);
        } else if (matchedCards1[0].number === card1.number) {
          if (!matchedCards1.includes(card1)) {
            matchedCards1.push(card1);
          }
        } else if (matchedCards2.length === 0) {
          if (!matchedCards2.includes(card1)) {
            matchedCards2.push(card1);
          }
        } else if (
          matchedCards2.length > 0 &&
          matchedCards2[0].number === card1.number
        ) {
          if (!matchedCards2.includes(card1)) {
            matchedCards2.push(card1);
          }
        } else {
          if (!matchedCards3.includes(card1)) {
            matchedCards3.push(card1);
          }
        }
      }

      bestPairPre = matchedCards1.concat(matchedCards2, matchedCards3);
      //matchedCards2.splice(0, 2);
      pair = matchedCards1.length;
      pair2 = matchedCards2.length;

      bestPairPre.sort((a, b) => a - b);
    }
  });

  bestPair = bestPairPre.slice(0, 4);

  if (pair === 2 || pair2 === 2) {
    pairObject.pair = true;
    if (pair === 2) {
      pairObject.pair1Number = matchedCards1[0].number;
    } else {
      pairObject.pair1Number = matchedCards2[0].number;
    }
  }
  if (pair === 3 || pair2 === 3) {
    pairObject.threeOfAKind = true;
    if (pair === 3) {
      pairObject.threeOfAKindNumber = matchedCards1[0].number;
    } else {
      pairObject.threeOfAKindNumber = matchedCards2[0].number;
    }
  }
  if (pair === 4 || pair2 === 4) {
    pairObject.fourOfAKind = true;
    if (pair === 4) {
      pairObject.fourOfAKindNumber = matchedCards1[0].number;
    } else {
      pairObject.fourOfAKindNumber = matchedCards2[0].number;
    }
  }

  if (pair === 2 && pair2 === 2) {
    if (matchedCards1[0].number > matchedCards2[0].number) {
      pairObject.pair1Number = matchedCards1[0].number;
      pairObject.pair2Number = matchedCards2[0].number;
    }
    pairObject.twoPair = true;
  } else if ((pair === 2 && pair2 === 3) || (pair === 3 && pair2 === 2)) {
    console.log(pair)
    console.log(pair2);
    pairObject.fullHouse = true;
    if (pair[0] > pair2[0]) {
      pairObject.fullHouseHighPair = pair[0].number;
      pairObject.fullHousePair2 = pair2[0].number;
    }
  }

  return pairObject;
}

//flush
//straight
//straight flush
//royal flush
export function checkStraightFlush(dealtCards) {
  let strArr = [];
  let strFlushObj = {
    straight: false,
    flush: false,
    straightFlush: false,
    royalFlush: false,
    highCard: 0,
    straightStart: 0,
    flushHighCard: 0,
  };

  let sortCards = [];
  let suitCards = [];
  dealtCards.forEach((card) => {
    sortCards.push(card.number);
    suitCards.push(card.suit);
  });

  // Sort the array in ascending order
  sortCards.sort((a, b) => a - b);

  for (let i = 1; i < 4; i++) {
    if (sortCards[i] === sortCards[i - 1] + 1) {
      strArr.push(suitCards[i - 1]);
      strArr.push(suitCards[i]);
      // sortCards[2]=3          sortCards[1] +1  = 3
      if (sortCards[i + 1] === sortCards[i] + 1) {
        strArr.push(suitCards[i + 1]);
        //  sortCards[3]=4       sortCards[2]=3 +1 = 4
        if (sortCards[i + 2] === sortCards[i + 1] + 1) {
          strArr.push(suitCards[i + 2]);
          //  sortCards[4]=5        sortCards[3]=4 + 1
          if (sortCards[i + 3] === sortCards[i + 2] + 1) {
            strArr.push(suitCards[i + 3]);
            strFlushObj.straight = true;
            strFlushObj.straightStart = sortCards[i - 1];
            break;
          }
        }
      }
    }
  }

  strFlushObj.highCard = sortCards[sortCards.length - 1];

  let clubs = 0;
  let hearts = 0;
  let spades = 0;
  let diamonds = 0;

  for (let j = 0; j < suitCards.length; j++) {
    switch (suitCards[j]) {
      case "spade":
        spades += 1;
        break;
      case "heart":
        hearts += 1;
        break;
      case "diamond":
        diamonds += 1;
        break;
      case "club":
        clubs += 1;
        break;
      default:
      // code block
    }
    if (spades === 5 || hearts === 5 || diamonds === 5 || clubs === 5) {
      strFlushObj.flush = true;
      //strFlushObj.flushHighCard =
    }
  }

  if (strFlushObj.flush === true && strFlushObj.straight === true) {
    for (let i = 1; i < 4; i++) {
      if (strArr[i] === strArr[i - 1]) {
        if (strArr[i + 1] === strArr[i]) {
          if (strArr[i + 2] === strArr[i + 1]) {
            if (strArr[i + 3] === strArr[i + 2] + 1) {
              strFlushObj.straightFlush = true;
              break;
            }
          }
        }
      }
    }

    if (sortCards[0] === 10 || sortCards[1] === 10 || sortCards[2] === 10) {
      strFlushObj.royalFlush = true;
    }
  }

  return strFlushObj;
}
