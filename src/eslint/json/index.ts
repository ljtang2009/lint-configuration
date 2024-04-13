import jsoncParser from 'jsonc-eslint-parser';
import jsonc from 'eslint-plugin-jsonc';
import rules from './rules/index.js';

export default {
  languageOptions: {
    parser: jsoncParser,
  },
  plugins: {
    jsonc,
  },
  rules: rules.getRules('jsonc'),
};
