import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const numberOfQuestions = 3;
export const playGame = (gameDescription, createQuestionAndRightAnswer) => {
  console.log('Welcome to Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let count = 0; count < numberOfQuestions; count += 1) {
    const questionAndRightAnswer = createQuestionAndRightAnswer();
    console.log(`Question: ${car(questionAndRightAnswer)}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = `${cdr(questionAndRightAnswer)}`;
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default playGame;
