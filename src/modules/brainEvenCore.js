import { isEven, randomGenerator } from '../helpers/index.js';

export const brainEvenCore = () => {
  const randomNumber = randomGenerator(0, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return {
    question: randomNumber,
    correctAnswer,
  };
};
