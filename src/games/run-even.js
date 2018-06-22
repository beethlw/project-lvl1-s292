import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import { playGame } from '../play-game';
import getRandom from '../random';

const maxNumber = 100;
const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');
const createQuestionAndRightAnswerEven = () => {
  const question = getRandom(maxNumber);
  const rightAnswer = isEven(question);
  return cons(question, rightAnswer);
};
export const runEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name:');
  console.log(`Hello, ${name}!\n`);
  if (playGame(createQuestionAndRightAnswerEven)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default runEven;
