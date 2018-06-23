import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 10;
const lengthOfProgression = 10;
const createQuestionAndRightAnswer = () => {
  const startTerm = getRandom(maxNumber);
  const commonDifference = getRandom(maxNumber);
  const countRightAnswer = getRandom(lengthOfProgression);
  let question = '';
  let term = startTerm;
  let rightAnswer = 0;
  for (let count = 1; count <= lengthOfProgression; count += 1) {
    term += commonDifference;
    if (count === countRightAnswer) {
      question += '.. ';
      rightAnswer = term;
    } else {
      question += `${term} `;
    }
  }
  return cons(question, rightAnswer);
};
export const runProgression = () => {
  const gameDescription = 'What number is missing in this progression?\n';
  playGame(gameDescription, createQuestionAndRightAnswer);
};
export default runProgression;
