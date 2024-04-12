import stylistic from '@stylistic/eslint-plugin';
import rules from './rules.js';

export default {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: rules.getRules('@stylistic'),
};
