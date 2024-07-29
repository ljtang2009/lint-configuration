import js from '@eslint/js';
import possibleProblems from './possibleProblems.ts';
import suggestions from './suggestions.ts';
import layoutFormatting from './layoutFormatting.ts';

export default {
  ...js.configs.recommended.rules,
  ...possibleProblems,
  ...suggestions,
  ...layoutFormatting,
};
