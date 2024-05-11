import jsoncParser from 'jsonc-eslint-parser';
import jsonc from 'eslint-plugin-jsonc';
import rules from './rules/index.js';
import { addPluginName } from '@/util/ruleTools.js';

const pluginName = 'jsonc';

export default {
  languageOptions: {
    parser: jsoncParser,
  },
  plugins: {
    [pluginName]: jsonc,
  },
  rules: addPluginName(pluginName, rules),
};
