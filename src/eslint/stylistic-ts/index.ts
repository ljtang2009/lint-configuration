import stylisticTs from '@stylistic/eslint-plugin-ts';
import rules from './rules.js';
import { addPluginName } from '@/util/ruleTools.js';
import parserTs from '@typescript-eslint/parser';

const pluginName = '@stylistic/ts';

// HACK stylistic 中有些规则在ts代码中会报错，可以考虑再次禁用这些规则。
// const conflictRules = {
//   '@stylistic/js/no-multi-spaces': ['off'],
// };

export default {
  languageOptions: {
    parser: parserTs,
  },
  plugins: {
    [pluginName]: stylisticTs,
  },
  rules: addPluginName(pluginName, rules),
  // rules: { ...addPluginName(pluginName, rules), ...conflictRules },
};
