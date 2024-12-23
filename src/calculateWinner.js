export function calculateWinner(play1, play2, play3, play4) {
  let player1 = play1;
  let player2 = play2;
  let player3 = play3;
  let player4 = play4;

  let initialMap = new Map([
    ['player1', player1],
    ['player2', player2],
    ['player3', player3],
    ['player4', player4]
  ])

  let scoreMap = new Map([
    ["Royal Flush", 9],
    ["Straight Flush", 8],
    ["Four of a Kind", 7],
    ["Full House", 6],
    ["Flush", 5],
    ["Straight", 4],
    ["Three of a Kind", 3],
    ["Two Pair", 2],
    ["Pair", 1],
  ]);

  let scores = [];
  let player1Score = scoreMap.get(player1);
  let player2Score = scoreMap.get(player2);
  let player3Score = scoreMap.get(player3);
  let player4Score = scoreMap.get(player4);

  scores.push(player1Score)
  scores.push(player2Score)
  scores.push(player3Score)
  scores.push(player4Score)

  scores.sort((a, b) => b - a);

  console.log(scores);

  if(scores[0] === 1 && scores[1]===1){
    let pairArr = []
    scores.forEach((score)=>{
      if(score === 1){
        pairArr.push(score);
      }
    })
    
  }


  let playerScoreMap = new Map([
    [player1Score, 'player1'],
    [player2Score, 'player2'],
    [player3Score, 'player3'],
    [player4Score, 'player4'],
  ])

  let winner = {
    winPlayer: playerScoreMap.get(scores[0]),
    hand: initialMap.get(playerScoreMap.get(scores[0]))
  }

 // console.log(winner);

  return winner;
}
