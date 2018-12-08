import { getRandomNum } from '../utils';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1 && num !== 0;
};

const makeGame = () => {
  const question = getRandomNum();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(description, makeGame);
