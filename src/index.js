import readlineSync from 'readline-sync';
export const askName = () => readlineSync.question('May I have your name? ');

export default askName;
