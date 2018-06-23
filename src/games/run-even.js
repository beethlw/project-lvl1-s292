import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 100;
const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');
const createQuestionAndRightAnswer = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = isEven(question);
  return cons(question, rightAnswer);
};
export const runEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';
  playGame(gameDescription, createQuestionAndRightAnswer);
};
export default runEven;
