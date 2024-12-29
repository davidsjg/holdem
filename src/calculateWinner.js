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
  let player1Score = {
    player: 'player1',
    scoreNum : scoreMap.get(player1),
  }
  let player2Score = {
    player: 'player2',
    scoreNum : scoreMap.get(player2),
  }
  let player3Score = {
    player: 'player3',
    scoreNum : scoreMap.get(player3),
  }
  let player4Score = {
    player: 'player4',
    scoreNum : scoreMap.get(player4),
  }

  let scoresNum = [player1Score.scoreNum, player2Score.scoreNum, player3Score.scoreNum, player4Score.scoreNum]

  scores.push(player1Score)
  scores.push(player2Score)
  scores.push(player3Score)
  scores.push(player4Score)

  scoresNum.sort((a, b) => b - a);


  let playerScoreMap = new Map([
    [player1Score.scoreNum, 'player1'],
    [player2Score.scoreNum, 'player2'],
    [player3Score.scoreNum, 'player3'],
    [player4Score.scoreNum, 'player4'],
  ])

  let winner1 = {
    winPlayer: playerScoreMap.get(scoresNum[0]),
    hand: initialMap.get(playerScoreMap.get(scoresNum[0]))
  }

 // console.log(winner);

  return {winner1, scores, scoresNum};
}
