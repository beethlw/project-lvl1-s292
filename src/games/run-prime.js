import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 100;
const gameDescription = 'Is this number prime?.';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let count = 2; count <= Math.floor(num / 2); count += 1) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
};
const createQuestionAndRightAnswer = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export const runPrime = () => playGame(gameDescription, createQuestionAndRightAnswer);
export default runPrime;
