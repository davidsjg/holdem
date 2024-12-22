export function checkPair(dealtCards) {
  let pairObject = {
    pair: false,
    twoPair: false,
    threeOfAKind: false,
    fourOfAKind: false,
    fullHouse: false,
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
          console.log(card1)
          matchedCards1.push(card1);
        } else if (matchedCards1[0].number !== card1.number) {
          console.log(card1)
          if(!matchedCards2.includes(card1)){
            matchedCards2.push(card1);
          }
        } else if (

          matchedCards1.length > 0 &&
          !matchedCards2.includes(card1.number)
        ) {
          matchedCards1.push(card1);
          console.log(card1)
        }
      }

      pair = matchedCards1.length;
      pair2 = matchedCards2.length;
      console.log(pair);
      console.log(pair2);
    }
  });

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
