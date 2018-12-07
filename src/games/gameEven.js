import { getRandomNum, isEven } from '../utils/utils';
import playGame from '..';

export const game = 'Answer "yes" if number even otherwise answer "no".';

export const makeGame = () => {
  const question = getRandomNum();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(game, makeGame);
