import readlineSync from 'readline-sync';

const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');
const numOfQuest = 3;
const maxNumber = 100;
export const playEven = () => {
  for (let count = 0; count < numOfQuest; count += 1) {
    const question = Math.floor((Math.random() * (maxNumber + 1)) + 1);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = isEven(question);
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default playEven;
