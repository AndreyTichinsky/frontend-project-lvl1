#!/usr/bin/env node
import coreLogic from '../src/games/coreLogic.js';
import brainGcdCore from '../src/games/brainGcdCore.js';

coreLogic({
  rulesQuestion: 'Find the greatest common divisor of given numbers.',
  currentGameCore: brainGcdCore,
});
