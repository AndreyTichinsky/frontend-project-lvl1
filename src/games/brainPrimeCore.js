import randomGenerator from '../helpers/randomGenerator.js';
import primeSolver from '../helpers/primeSolver.js';

const brainPrimeCore = () => {
  const primeRange = [1, 100];
  const questionNumber = randomGenerator(...primeRange);
  const correctAnswer = primeSolver(questionNumber) ? 'yes' : 'no';
  return {
    question: questionNumber,
    correctAnswer,
  };
};
export default brainPrimeCore;
