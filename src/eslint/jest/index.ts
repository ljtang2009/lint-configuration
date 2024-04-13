import eslintPluginJest from 'eslint-plugin-jest';
import rules from './rules.js';

export default {
  ...eslintPluginJest.configs['flat/all'],
  rules: {
    ...eslintPluginJest.configs['flat/all'].rules,
    ...rules.getRules('jest'),
  },
};
