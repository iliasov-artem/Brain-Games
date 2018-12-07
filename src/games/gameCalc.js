import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomNum } from '../utils/utils';
import playGame from '..';

const game = 'What is the result of the expression?';

const operators = [
  {
    sign: '+',
    method: (a, b) => a + b,
  },
  {
    sign: '-',
    method: (a, b) => a - b,
  },
  {
    sign: '*',
    method: (a, b) => a * b,
  },
];

const getOperator = () => operators[getRandomNum(0, 2)];
const getNumbers = () => cons(getRandomNum(), getRandomNum());

const makeGame = () => {
  const { sign, method } = getOperator();
  const numbers = getNumbers();
  const question = `${car(numbers)} ${sign} ${cdr(numbers)}`;
  const rightAnswer = method(car(numbers), cdr(numbers)).toString();
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(game, makeGame);
