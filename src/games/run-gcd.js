import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../random';

const isEven = a => a % 2 === 0;
const maxNumber = 100;
const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else if (a === b) {
    return a;
  } else if (a === 1 || b === 1) {
    return 1;
  } else if (isEven(a) && isEven(b)) {
    return 2 * getGcd(a / 2, b / 2);
  } else if (isEven(a) && (!isEven(b))) {
    return getGcd(a / 2, b);
  } else if ((!isEven(a)) && isEven(b)) {
    return getGcd(a, b / 2);
  } else if (a > b) {
    return getGcd((a - b) / 2, b);
  }
  return getGcd((b - a) / 2, a);
};
const createQuestionAndRightAnswerGcd = () => {
  const a = getRandom(maxNumber);
  const b = getRandom(maxNumber);
  const question = `${a} ${b}`;
  console.log(question);
  const rightAnswer = getGcd(a, b);
  return cons(question, rightAnswer);
};
export const runGcd = () => {
  console.log('Welcome to Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = readlineSync.question('May I have your name:');
  console.log(`Hello, ${name}!\n`);
  if (playGame(createQuestionAndRightAnswerGcd)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGcd;
