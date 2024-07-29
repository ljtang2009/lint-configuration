import eslintPluginJest from 'eslint-plugin-jest';
import rules from './rules.ts';
import { addPluginName } from '@/util/ruleTools.ts';

const pluginName = 'jest';

export default {
  ...eslintPluginJest.configs['flat/recommended'],
  rules: {
    ...eslintPluginJest.configs['flat/style'].rules,
    ...eslintPluginJest.configs['flat/recommended'].rules,
    ...addPluginName(pluginName, rules),
  },
};
