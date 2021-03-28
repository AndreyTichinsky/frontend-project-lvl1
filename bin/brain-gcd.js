#!/usr/bin/env node
import { coreLogic, brainGcdCore } from '../src/index.js';

coreLogic({
  rulesQuestion: 'Find the greatest common divisor of given numbers.',
  currentGameCore: brainGcdCore,
});
