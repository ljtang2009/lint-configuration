import stylisticJs from '@stylistic/eslint-plugin-js';
import rules from './rules.js';
import { addPluginName } from '@/util/ruleTools.js';

const pluginName = '@stylistic/js';

export default {
  plugins: {
    [pluginName]: stylisticJs,
  },
  rules: addPluginName(pluginName, rules),
};
