export function calculateScore(pairObject, strFlushObject) {
  let pairObj = pairObject;
  let strFlushObj = strFlushObject;

  let calcHand = "";



  if (strFlushObj.royalFlush) {
    calcHand = "Royal Flush";
  } else if (strFlushObj.straightFlush) {
    calcHand = "Straight Flush";
  } else if (pairObj.fourOfAKind) {
    calcHand = "Four of a Kind";
  } else if (pairObj.fullHouse) {
    calcHand = "Full House";
  } else if (strFlushObj.flush) {
    calcHand = "Flush";
  } else if (strFlushObj.straight) {
    calcHand = "Straight";
  } else if (pairObj.threeOfAKind) {
    calcHand = "Three of a Kind";
  } else if (pairObj.twoPair) {
    calcHand = "Two Pair";
  } else if (pairObj.pair) {
    calcHand = "Pair";
  }

  return calcHand;
}
