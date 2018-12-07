import { getRandomNum } from '../utils/utils';
import playGame from '..';

export const game = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  const min = a < b ? a : b;
  for (let i = min; i > 0; i -= 1) {
    if (!(a % i) && !(b % i)) {
      return i.toString();
    }
  }
  return null;
};
export const makeGame = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const rightAnswer = findGcd(num1, num2);
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(game, makeGame);
