#!/usr/bin/env node
import coreLogic from '../src/games/coreLogic.js';
import brainCalcCore from '../src/games/brainCalcCore.js';

coreLogic({
  rulesQuestion: 'What is the result of the expression?',
  currentGameCore: brainCalcCore,
});
