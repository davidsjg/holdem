export function checkPair(dealtCards) {
  let pairObject = {
    pair: false,
    twoPair: false,
    threeOfAKind: false,
    fullHouse: false,
    fourOfAKind: false,
  };
  let pair = 0;
  let pair2 = 0;
  let twoPair = false;
  let matchedCards1 = [];
  let matchedCards2 = [];
  let compareCards = dealtCards.slice();
  dealtCards.forEach((card1) => {
    for (let j = 0; j < compareCards.length; j++) {
      let card2 = compareCards[j];

      if (card1.number === card2.number && card1.suit !== card2.suit) {
        if (matchedCards1.length === 0) {
          matchedCards1.push(card1);
        } else if (matchedCards1[0].number !== card1.number) {
          if (!matchedCards2.includes(card1)) {
            matchedCards2.push(card1);
          }
        } else if (
          matchedCards1.length > 0 &&
          !matchedCards2.includes(card1.number)
        ) {
          matchedCards1.push(card1);
        }
      }

      pair = matchedCards1.length;
      pair2 = matchedCards2.length;
    }
  });
  console.log(pair);
  console.log(pair2);
  if (pair === 2 || pair2 === 2) {
    pairObject.pair = true;
  }
  if (pair === 3 || pair2 === 3) {
    pairObject.threeOfAKind = true;
  }
  if (pair === 4 || pair2 === 4) {
    pairObject.fourOfAKind = true;
  }

  if (pair === 2 && pair2 === 2) {
    pairObject.twoPair = true;
  } else if ((pair === 2 && pair2 === 3) || (pair === 3 && pair2 === 2)) {
    pairObject.fullHouse = true;
  }

  return pairObject;
}

//flush
//straight
//straight flush
//royal flush
export function checkStraightFlush(dealtCards) {
  let strFlushObj = {
    straight: false,
    flush: false,
    straightFlush: false,
    royalFlush: false,
  };

  let sortCards = [];
  let suitCards = [];
  dealtCards.forEach((card) => {
    sortCards.push(card.number);
    suitCards.push(card.suit);
  });

  // Sort the array in ascending order
  sortCards.sort((a, b) => a - b);

  console.log(sortCards);

  for (let i = 1; i < 4; i++) {
    if (sortCards[i] === sortCards[i - 1] + 1) {
      console.log("inside 1");

      // sortCards[2]=3          sortCards[1] +1  = 3
      if (sortCards[i + 1] === sortCards[i] + 1) {
        console.log("inside 2");

        //  sortCards[3]=4       sortCards[2]=3 +1 = 4
        if (sortCards[i + 2] === sortCards[i + 1] + 1) {
          console.log("inside 3");

          //  sortCards[4]=5        sortCards[3]=4 + 1
          if (sortCards[i + 3] === sortCards[i + 2] + 1) {
            console.log("inside 4");
            strFlushObj.straight = true;
            break;
          }
        }
      }
    }
  }

  suitCards.sort((a, b) => a - b);

  console.log(suitCards);
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
    if(spades===5 || hearts===5 || diamonds===5 || clubs===5){
      strFlushObj.flush = true;
    }
  }

  if(strFlushObj.flush === true && strFlushObj.straight === true){
    strFlushObj.straightFlush = true;
    if(sortCards[0]===10 || sortCards[1]===10 || sortCards[2] === 10){
      strFlushObj.royalFlush = true;
    }
  }

  return strFlushObj;
}
