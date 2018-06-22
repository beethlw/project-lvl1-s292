import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../random';

const maxNumber = 100;
const createQuestionAndRightAnswerCalc = () => {
  const a = getRandom(maxNumber);
  const b = getRandom(maxNumber);
  const c = getRandom(3);
  let questionAndRightAnswer;
  switch (c) {
    case 1:
      questionAndRightAnswer = cons(`${a} + ${b}`, a + b);
      break;
    case 2:
      questionAndRightAnswer = cons(`${a} - ${b}`, a - b);
      break;
    case 3:
      questionAndRightAnswer = cons(`${a} * ${b}`, a * b);
      break;
    default:
      console.log(`Error: wrong sign ${c}`);
  }
  return questionAndRightAnswer;
};
export const runCalc = () => {
  const gameDescription = 'What is the result of the expression?\n';
  playGame(gameDescription, createQuestionAndRightAnswerCalc);
};

export default runCalc;
