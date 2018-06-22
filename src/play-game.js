import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const numOfQuest = 3;
export const playGame = (createQuestionAndRightAnswer) => {
  for (let count = 0; count < numOfQuest; count += 1) {
    const questionAndRightAnswer = createQuestionAndRightAnswer();
    console.log(`Question: ${car(questionAndRightAnswer)}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = `${cdr(questionAndRightAnswer)}`;
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};
export default playGame;
