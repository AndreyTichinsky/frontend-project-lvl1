#!/usr/bin/env node
import coreLogic from '../src/games/coreLogic.js';
import brainEvenCore from '../src/games/brainEvenCore.js';

coreLogic({
  rulesQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
  currentGameCore: brainEvenCore,
});
