export function convertCards(cardNumber) {



   switch (cardNumber) {
      case 11:
         cardNumber = "J";
        break;
      case 12:
         cardNumber = "Q";
        break;
      case 13:
         cardNumber = "K";
        break;
      case 14:
         cardNumber = "A";
        break;
      default:
         cardNumber = cardNumber;
  }
  return cardNumber;
}