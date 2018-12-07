import { getRandomNum } from '../utils/utils';
import playGame from '..';

const game = 'What number is missing in the progression?';

const makeProgression = (l = 10) => {
  const pace = getRandomNum(1, 10);
  const firstNum = getRandomNum(1, 50);
  const progression = [firstNum];
  for (let i = 1; i < l; i += 1) {
    progression.push(progression[i - 1] + pace);
  }
  return progression;
};

const makeGame = () => {
  const progression = makeProgression();
  const questionIndex = getRandomNum(0, progression.length - 1);
  const rightAnswer = progression[questionIndex].toString();
  const questionArray = [...progression];
  questionArray[questionIndex] = '..';
  const question = questionArray.join(' ');
  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(game, makeGame);
