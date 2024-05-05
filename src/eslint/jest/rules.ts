import { addPluginName } from '../../util/ruleTools.js';

const rules = {
  // Disallow disabled tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
  'no-disabled-tests': ['off'],

  // Disallow setup and teardown hooks
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
  'no-hooks': ['off'],

  // Disallow large snapshots
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
  'no-large-snapshots': ['off'],

  // Prefer importing Jest globals
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-importing-jest-globals.md
  'prefer-importing-jest-globals': ['off'],
};

function getRules(pluginName: string): Record<string, unknown> {
  return addPluginName(pluginName, rules);
}

export default {
  getRules,
};