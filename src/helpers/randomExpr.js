import { randomGenerator } from './randomGenerator.js';

export const randomExprGen = (min, max) => {
  const operators = ['+', '-', '*'];
  const opStartId = 0;
  const opEndId = 2;
  const randomOperator = operators(randomGenerator(opStartId, opEndId));
  const firstDigit = randomGenerator(min, max);
  const secondDigit = randomGenerator(min, max);
  return `${firstDigit} ${randomOperator} ${secondDigit}`;
};
