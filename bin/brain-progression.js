#!/usr/bin/env node
import coreLogic from '../src/games/coreLogic.js';
import brainProgCore from '../src/games/brainProgCore.js';

coreLogic({
  rulesQuestion: 'What number is missing in the progression?',
  currentGameCore: brainProgCore,
});
