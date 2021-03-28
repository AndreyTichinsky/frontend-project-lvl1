#!/usr/bin/env node
import { coreLogic, brainCalcCore } from '../src/index.js';

coreLogic({
  rulesQuestion: 'What is the result of the expression?',
  currentGameCore: brainCalcCore,
});
