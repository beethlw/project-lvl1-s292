#!/usr/bin/env node
import { playEven } from '../play-even';
import { askName } from '..';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = askName();
console.log(`Hello, ${name}!\n`);
if (playEven()) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
