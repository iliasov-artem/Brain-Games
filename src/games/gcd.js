import { getRandomNum } from '../utils';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  const min = Math.min(a, b);
  let gcd = 1;
  for (let i = min; i > 0; i -= 1) {
    if (!(a % i) && !(b % i)) {
      gcd = i;
    }
  }
  return gcd;
};
export const makeGame = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const rightAnswer = findGcd(num1, num2).toString();
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(description, makeGame);
