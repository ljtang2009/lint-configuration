import stylisticPlus from '@stylistic/eslint-plugin-plus';
import rules from './rules.ts';
import { addPluginName } from '@/util/ruleTools.ts';

const pluginName = '@stylistic/eslint-plugin-plus';

export default {
  plugins: {
    [pluginName]: stylisticPlus,
  },
  rules: addPluginName(pluginName, rules),
};
