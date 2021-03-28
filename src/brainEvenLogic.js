import readlineSync from 'readline-sync';
import { randomGenerator, isEven } from './index.js';
// eslint-disable-next-line no-unused-vars
import name from './cli.js';

const brainEvenLogic = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let isCorrect = true;
  let counter = 0;
  const winValue = 3;
  while (isCorrect && counter < winValue) {
    const randomNumber = randomGenerator(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      isCorrect = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
    } else {
      counter += 1;
      console.log('Correct!');
    }
  }
  if (counter === winValue) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brainEvenLogic;
