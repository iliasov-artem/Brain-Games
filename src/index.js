import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const playerName = readlineSync.question('May i have your name?\n', {
    defaultInput: 'anonim',
  });
  console.log(`Hello, ${playerName}!\n`);
};

export default greeting;
