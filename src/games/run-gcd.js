import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 100;
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
  let c = 0;
  let m = a;
  let n = b;
  while (n !== 0) {
    c = n;
    n = m % n;
    m = c;
  }
  return m;
};
const createQuestionAndRightAnswer = () => {
  const a = getRandom(maxNumber);
  const b = getRandom(maxNumber);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return cons(question, rightAnswer);
};
export const runGcd = () => playGame(gameDescription, createQuestionAndRightAnswer);
export default runGcd;
