import { randomGenerator } from '../index.js';

export const brainProgCore = () => {
  const baseCfg = [1, 10];
  const stepCfg = [1, 10];
  const placeCfg = [0, 9];
  const progLen = 10;
  const baseNumber = randomGenerator(...baseCfg);
  const stepValue = randomGenerator(...stepCfg);
  const progression = Array.from({ length: progLen }).reduce((acc, _cur, idx) => {
    acc.push(String(baseNumber + stepValue * idx));
    return acc;
  }, []);
  const randomPlace = randomGenerator(...placeCfg);
  const correctAnswer = progression[randomPlace];
  progression[randomPlace] = '..';
  return {
    question: progression.join(' '),
    correctAnswer,
  };
};
