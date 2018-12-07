import readlineSync from 'readline-sync';

const playGame = (game, makeGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(game);
  const playerName = readlineSync.question('May I have your name? ', { defaultInput: 'anonim' });
  console.log(`Hello, ${playerName}!\n`);
  for (let atempts = 3; atempts > 0; atempts -= 1) {
    const gameState = makeGame();
    const { question, rightAnswer } = gameState;
    const playerAnswer = readlineSync.question(`${question}\n`);
    console.log(`Your answer: ${playerAnswer}`);
    if (playerAnswer !== rightAnswer) {
      console.log(`'${playerAnswer} is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};

export default playGame;
