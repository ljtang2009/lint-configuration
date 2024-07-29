import stylisticJs from '@stylistic/eslint-plugin-js';
import rules from './rules.ts';
import { addPluginName } from '@/util/ruleTools.ts';

const pluginName = '@stylistic/js';

export default {
  plugins: {
    [pluginName]: stylisticJs,
  },
  rules: addPluginName(pluginName, rules),
};
