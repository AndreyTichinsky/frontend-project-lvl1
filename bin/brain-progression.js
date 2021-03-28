#!/usr/bin/env node
import { coreLogic, brainProgCore } from '../src/index.js';

coreLogic({
  rulesQuestion: 'What number is missing in the progression?',
  currentGameCore: brainProgCore,
});
