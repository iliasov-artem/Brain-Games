import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomNum, playGame } from '../index';

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
  {
    sign: '/',
    method: (a, b) => a / b,
  },
];

const getOperator = () => operators[getRandomNum(1, 4)];
const getNumbers = () => cons(getRandomNum(), getRandomNum());

const makeGame = () => {
  const { sign, method } = getOperator();
  const numbers = getNumbers();
  const question = `${car(numbers)} ${sign} ${cdr(numbers)}`;
  const rightAnswer = method(car(numbers), cdr(numbers)).toString();
  const gameState = {
    question,
    rightAnswer,
  };
  return gameState;
};

export default playGame(game, makeGame);