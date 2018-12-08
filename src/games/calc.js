import { getRandomNum } from '../utils';
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

const makeGame = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const { sign, method } = getOperator();
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = method(firstNum, secondNum).toString();
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(game, makeGame);
