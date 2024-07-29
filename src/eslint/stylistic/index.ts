import stylistic from '@stylistic/eslint-plugin';
import rules from './rules.ts';
import { addPluginName } from '@/util/ruleTools.ts';

const pluginName = '@stylistic';

export default {
  plugins: {
    [pluginName]: stylistic,
  },
  rules: addPluginName(pluginName, rules),
};
