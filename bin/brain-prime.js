#!/usr/bin/env node
import coreLogic from '../src/games/coreLogic.js';
import brainPrimeCore from '../src/games/brainPrimeCore.js';

coreLogic({
  rulesQuestion:
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  currentGameCore: brainPrimeCore,
});
