#!/usr/bin/env node
import { coreLogic, brainPrimeCore } from '../src/index.js';

coreLogic({
  rulesQuestion:
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  currentGameCore: brainPrimeCore,
});
