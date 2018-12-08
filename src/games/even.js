import getRandomNum from '../utils';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

export const makeGame = () => {
  const question = getRandomNum();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(description, makeGame);
