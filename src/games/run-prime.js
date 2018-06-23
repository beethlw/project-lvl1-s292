import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 100;
const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  let temp = Math.floor(num / 2);
  while (temp > 1) {
    if (num % temp === 0) {
      return false;
    }
    temp -= 1;
  }
  return true;
};
const createQuestionAndRightAnswer = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export const runPrime = () => {
  const gameDescription = 'Is this number prime?.\n';
  playGame(gameDescription, createQuestionAndRightAnswer);
};
export default runPrime;
