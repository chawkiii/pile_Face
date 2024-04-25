const score = JSON.parse(localStorage.getItem('pileFaceScore')) ||
{
  wins: 0,
  loses: 0
}

function guess(playerMove) {
  let randomNumber = Math.random();
  let result = ``;

  randomNumber>=0&&randomNumber<0.5?result='pile':result='face';
  console.log(result);
  result===playerMove?console.log(`You are the Winner Dude!`):console.log(`You are the Loser -_-`);
  result===playerMove?score.wins++:score.loses++;
  localStorage.setItem('pileFaceScore', JSON.stringify(score));
  console.log(score);
  
  return score
}

function resetScore() {
  score.wins= 0;
  score.loses= 0;
  localStorage.removeItem(pileFaceScore);
  console.log(`The Score is Reset to 0.`);
  return score
} 





