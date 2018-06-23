import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../utils';

const maxNumber = 10000;
const makeNumber = (base, length) => {
  let result = 0;
  for (let count = 0; count < length; count += 1) {
    result = (result * 10) + base;
  }
  return result;
};
const getRightAnswer = (number) => {
  const countOfDigits = String(number).length;
  let sumOfDigits = 0;
  let temp = number;
  for (let count = 0; count < countOfDigits; count += 1) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
  }
  const baseNumber = Math.floor(sumOfDigits / countOfDigits);
  const lengthOfIncrement = sumOfDigits % countOfDigits;
  return makeNumber(baseNumber, countOfDigits) + makeNumber(1, lengthOfIncrement);
};
const createQuestionAndRightAnswer = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};
export const runBalance = () => {
  const gameDescription = 'Balance the given number.\n';
  playGame(gameDescription, createQuestionAndRightAnswer);
};
export default runBalance;
