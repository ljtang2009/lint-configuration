import stylistic from '@stylistic/eslint-plugin';
import rules from './rules.js';
import { addPluginName } from '@/util/ruleTools.js';

const pluginName = '@stylistic';

export default {
  plugins: {
    [pluginName]: stylistic,
  },
  rules: addPluginName(pluginName, rules),
};
