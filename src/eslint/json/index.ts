import jsoncParser from 'jsonc-eslint-parser';
import jsonc from 'eslint-plugin-jsonc';
import rules from './rules/index.ts';
import { addPluginName } from '@/util/ruleTools.ts';

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
