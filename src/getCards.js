import myArray from "./masterArr.js";

export function getCards() {
  let masterArr = myArray;
  let randNumbs = [];
  let cards = [];

  let testCards = [
    { 'suit':'heart', 'number':1 },
    { 'suit':'heart', 'number':3 },
    { 'suit':'spade', 'number':14 },
    { 'suit':'club', 'number':11 },
    { 'suit':'heart', 'number':12 },
    { 'suit':'heart', 'number':13 },
    { 'suit':'heart', 'number':10 },
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
