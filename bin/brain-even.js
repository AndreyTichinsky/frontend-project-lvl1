#!/usr/bin/env node
import { coreLogic, brainEvenCore } from '../src/index.js';

coreLogic({
  rulesQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
  currentGameCore: brainEvenCore,
});
