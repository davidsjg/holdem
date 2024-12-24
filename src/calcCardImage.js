export function calcCardImage(number, suit) {
  let cardImage = "";

  console.log(number)
  console.log(suit)

  if (number === 2 && suit === "clubs") {
    cardImage = "twoClubs";
  }

  return cardImage;
}

export default calcCardImage;
