import readlineSync from 'readline-sync';

const getRandomNum = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));
const isEven = num => num % 2 ? false : true;

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const playerName = readlineSync.question('May i have your name?\n', {
    defaultInput: 'anonim',
  });
  console.log(`Hello, ${playerName}!\n`);
  for (let atempts = 0; atempts < 3; atempts += 1) {
    const question = getRandomNum();
    const answer = readlineSync.question(`Question: ${question}\n`);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Your answer: ${answer}`);
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
