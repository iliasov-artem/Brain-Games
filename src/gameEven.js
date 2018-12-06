import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const playerName = readlineSync.question('May i have your name?\n', {
    defaultInput: 'anonim',
  });
  console.log(`Hello, ${playerName}!\n`);
  let atempts = 3;
  while (atempts) {
    const num = getRandomNum(1, 100);
    const answer = readlineSync.question(`Question: ${num}\n`);
    const rightAnswer = num % 2 ? 'no' : 'yes';
    console.log(`Your answer: ${answer}`);
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${playerName}`);
      return;
    }
    console.log('Correct!');
    atempts -= 1;
  }
  console.log(`Congratulations, ${playerName}!`);
};
