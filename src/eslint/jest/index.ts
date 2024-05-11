import eslintPluginJest from 'eslint-plugin-jest';
import rules from './rules.js';
import { addPluginName } from '@/util/ruleTools.js';

const pluginName = 'jest';

export default {
  ...eslintPluginJest.configs['flat/all'],
  rules: {
    ...eslintPluginJest.configs['flat/all'].rules,
    ...addPluginName(pluginName, rules),
  },
};
