import isEven from '../helpers/isEven.js';
import randomGenerator from '../helpers/randomGenerator.js';

const brainEvenCore = () => {
  const minLimit = 0;
  const maxLimit = 100;
  const randomNumber = randomGenerator(minLimit, maxLimit);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return {
    question: randomNumber,
    correctAnswer,
  };
};
export default brainEvenCore;
