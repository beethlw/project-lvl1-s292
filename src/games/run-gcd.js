import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 100;
const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a === b) {
    return a;
  }
  if (a === 1 || b === 1) {
    return 1;
  }
  const min = Math.min(a, b);
  if (Math.max(a, b) % min === 0) {
    return min;
  }
  for (let count = min / 2; count > 1; count -= 1) {
    if (a % count === 0 && b % count === 0) return count;
  }
  return 1;
};
const createQuestionAndRightAnswer = () => {
  const a = getRandom(maxNumber);
  const b = getRandom(maxNumber);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return cons(question, rightAnswer);
};
export const runGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.\n';
  playGame(gameDescription, createQuestionAndRightAnswer);
};

export default runGcd;
