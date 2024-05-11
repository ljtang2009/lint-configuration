import stylisticPlus from '@stylistic/eslint-plugin-plus';
import rules from './rules.js';
import { addPluginName } from '@/util/ruleTools.js';

const pluginName = '@stylistic/eslint-plugin-plus';

export default {
  plugins: {
    [pluginName]: stylisticPlus,
  },
  rules: addPluginName(pluginName, rules),
};
