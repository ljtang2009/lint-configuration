import rules from './rules/index.ts';
import tseslint from 'typescript-eslint';
import { addPluginName } from '@/util/ruleTools.ts';

const pluginName = '@typescript-eslint';

const config: {
  languageOptions: Record<string, unknown>;
  plugins: Record<string, typeof tseslint.plugin>;
  rules: Record<string, unknown>;
} = {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      // @see https://typescript-eslint.io/rules/consistent-type-imports/#usage-with-emitdecoratormetadata
      emitDecoratorMetadata: true,
    },
  },
  plugins: {
    [pluginName]: tseslint.plugin,
  },
  rules: addPluginName(pluginName, rules),
};

export default config;
