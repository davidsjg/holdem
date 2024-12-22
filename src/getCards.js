import myArray from "./masterArr.js";

export function getCards() {
  let masterArr = myArray;
  let randNumbs = [];
  let cards = [];

  let testCards = [
    { 'suit':'heart', 'number':1 },
    { 'suit':'club', 'number':3 },
    { 'suit':'spade', 'number':4 },
    { 'suit':'club', 'number':5 },
    { 'suit':'diamond', 'number':6 },
    { 'suit':'heart', 'number':7 },
    { 'suit':'club', 'number':10 },
  ]

  for (let i = 0; i < 7; i++) {
    let rand = Math.floor(Math.random() * 51) + 1;
    randNumbs.push(rand);
  }

  randNumbs.forEach((num) => {
    let card = masterArr[num];
    cards.push(card);
  });

   return testCards;
}
