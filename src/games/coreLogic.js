import readlineSync from 'readline-sync';
import name from '../cli.js';

const coreLogic = ({
  rulesQuestion,
  currentGameCore,
}) => {
  console.log(rulesQuestion);
  let isCorrect = true;
  let counter = 0;
  const winValue = 3;
  while (isCorrect && counter < winValue) {
    const { question, correctAnswer } = currentGameCore();
    console.log(`Question: ${question}`);
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

export default coreLogic;
