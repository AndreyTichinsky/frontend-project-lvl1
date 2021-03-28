import { randomGenerator, primeSolver } from '../index.js';

export const brainPrimeCore = () => {
  const primeRange = [1, 100];
  const questionNumber = randomGenerator(...primeRange);
  const correctAnswer = primeSolver(questionNumber) ? 'yes' : 'no';
  return {
    question: questionNumber,
    correctAnswer,
  };
};
