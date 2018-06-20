import readlineSync from 'readline-sync';

export const playEven = () => {
  const numOfQuest = 3;
  const maxNumber = 100;
  for (let count = 0; count < numOfQuest; count += 1) {
    const number = Math.floor((Math.random() * (maxNumber + 1)) + 1);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default playEven;
