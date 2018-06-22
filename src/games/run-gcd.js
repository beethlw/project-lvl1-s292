import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../random';
import isEven from '../even';

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
  if (isEven(a) && isEven(b)) {
    return 2 * getGcd(a / 2, b / 2);
  }
  if (isEven(a) && (!isEven(b))) {
    return getGcd(a / 2, b);
  }
  if ((!isEven(a)) && isEven(b)) {
    return getGcd(a, b / 2);
  }
  if (a > b) {
    return getGcd((a - b) / 2, b);
  }
  return getGcd((b - a) / 2, a);
};
const createQuestionAndRightAnswerGcd = () => {
  const a = getRandom(maxNumber);
  const b = getRandom(maxNumber);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return cons(question, rightAnswer);
};
export const runGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.\n';
  playGame(gameDescription, createQuestionAndRightAnswerGcd);
};

export default runGcd;
