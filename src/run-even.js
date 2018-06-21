import readlineSync from 'readline-sync';
import { playEven } from './play-even';

export const runEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name:');
  console.log(`Hello, ${name}!\n`);
  if (playEven()) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default runEven;
