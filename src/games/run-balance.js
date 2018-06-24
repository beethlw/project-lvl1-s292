import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const gameDescription = 'Balance the given number.';
const maxNumber = 10000;
const makeNumber = (base, length) => {
  let result = 0;
  for (let count = 0; count < length; count += 1) {
    result = (result * 10) + base;
  }
  return result;
};
const balanceNumber = (number) => {
  const countOfDigits = String(number).length;
  let sumOfDigits = 0;
  let temp = number;
  for (let count = 0; count < countOfDigits; count += 1) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
  }
  const baseNumber = Math.floor(sumOfDigits / countOfDigits);
  const lengthOfIncrement = sumOfDigits % countOfDigits;
  let result = String(makeNumber(baseNumber, countOfDigits) + makeNumber(1, lengthOfIncrement));
  let count = countOfDigits - result.length;
  while (count > 0) {
    result = `0${result}`;
    count -= 1;
  }
  return result;
};
const createQuestionAndRightAnswer = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = balanceNumber(question);
  return cons(question, rightAnswer);
};
export const runBalance = () => playGame(gameDescription, createQuestionAndRightAnswer);
export default runBalance;
