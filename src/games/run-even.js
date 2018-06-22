import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../random';
import isEven from '../even';

const maxNumber = 100;
const createQuestionAndRightAnswerEven = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export const runEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';
  playGame(gameDescription, createQuestionAndRightAnswerEven);
};
export default runEven;
