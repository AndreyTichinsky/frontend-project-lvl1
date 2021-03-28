import randomExprGen from '../helpers/randomExprGen.js';
import exprSolver from '../helpers/exprSolver.js';

const brainCalcCore = () => {
  const minLimit = 0;
  const maxLimit = 20;
  const randomExpression = randomExprGen(minLimit, maxLimit);
  const correctAnswer = String(exprSolver(randomExpression));
  return {
    question: randomExpression,
    correctAnswer,
  };
};
export default brainCalcCore;
