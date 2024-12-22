import myArray from "./masterArr.js";

export function getCards() {
  let masterArr = myArray;
  let randNumbs = [];
  let cards = [];

  let testCards = [
    { 'suit':'heart', 'number':8 },
    { 'suit':'diamond', 'number':2 },
    { 'suit':'club', 'number':4 },
    { 'suit':'spade', 'number':8 },
    { 'suit':'club', 'number':3 },
    { 'suit':'heart', 'number':2 },
    { 'suit':'club', 'number':2 },
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
