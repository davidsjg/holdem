import myArray from "./masterArr.js";
let cardArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];

export function getCards() {
  let masterArr = myArray;
  let randNumbs = [];
  let tempRand = [];
  let cards = [];

  let testCards = [
    { suit: "heart", number: 13 },
    { suit: "club", number: 3 },

    { suit: "heart", number: 11 },
    { suit: "spade", number: 10 },

    { suit: "diamond", number: 6 },
    { suit: "spade", number: 5 },

    { suit: "club", number: 4 },
    { suit: "heart", number: 8 },

    { suit: "spade", number: 13 },
    { suit: "diamond", number: 3 },
    { suit: "spade", number: 11 },
    { suit: "diamond", number: 10 },
    { suit: "diamond", number: 2 },
  ];

  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * (51 - i)) + 1;
    let pulled = cardArr[rand];
    randNumbs.push(pulled);
    let index = cardArr.indexOf(pulled);
    if (index > -1) {
      cardArr.splice(index, 1);
    }
  }

  randNumbs.forEach((num) => {
    let card = masterArr[num];
    cards.push(card);
  });



  let testFinal = cards.concat(testCards)



  return testCards;
}
