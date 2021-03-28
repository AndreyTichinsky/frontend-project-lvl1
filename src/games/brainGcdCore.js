import { randomGenerator, gcdSolver } from '../index.js';

export const brainGcdCore = () => {
  const minLimit = 1;
  const maxLimit = 10;
  const baseGcd = randomGenerator(minLimit, maxLimit);
  const firstDigit = randomGenerator(minLimit, maxLimit) * baseGcd;
  const secondDigit = randomGenerator(minLimit, maxLimit) * baseGcd;
  const correctGcd = String(gcdSolver(firstDigit, secondDigit));
  return {
    question: `${firstDigit} ${secondDigit}`,
    correctAnswer: correctGcd,
  };
};
