import { getRandomNum } from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';

const makeProgression = (length, pace, firstNum) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + pace * i);
  }
  return progression;
};

const makeGame = () => {
  const pace = getRandomNum(1, 10);
  const firstNum = getRandomNum(1, 50);
  const progression = makeProgression(10, pace, firstNum);
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

export default () => playGame(description, makeGame);
