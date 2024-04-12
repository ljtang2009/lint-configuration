import js from '@eslint/js';
import possibleProblems from './possibleProblems.js';
import suggestions from './suggestions.js';
import layoutFormatting from './layoutFormatting.js';

export default {
  ...js.configs.recommended.rules,
  ...possibleProblems,
  ...suggestions,
  ...layoutFormatting,
};
