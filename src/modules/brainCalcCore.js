import { randomExprGen, exprSolver } from '../helpers/index.js';

export const brainCalcCore = () => {
  const minLimit = 0;
  const maxLimit = 20;
  const randomExpression = randomExprGen(minLimit, maxLimit);
  const correctAnswer = exprSolver(randomExpression);
  return {
    question: randomExpression,
    correctAnswer,
  };
};
