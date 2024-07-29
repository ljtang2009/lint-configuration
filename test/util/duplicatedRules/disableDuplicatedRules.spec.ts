import disableDuplicatedRules from '@/util/duplicatedRules/disableDuplicatedRules.ts';
import {
  describe, it, expect,
} from 'vitest';

describe('disableDuplicatedRules', () => {
  it('should disable duplicated rules based on plugin order', () => {
    const eslintConfig = [
      {
        rules: {
          '@stylistic/js/rule1': 'off',
          '@stylistic/ts/rule1': 'off',
          '@typescript-eslint/rule1': 'off',
          '@stylistic/eslint-plugin-plus/rule1': 'off',
          rule1: 'off',
        },
      },
      {
        rules: {
          '@stylistic/js/rule2': 'off',
          '@stylistic/ts/rule2': 'off',
          '@typescript-eslint/rule2': 'off',
          '@stylistic/eslint-plugin-plus/rule2': 'off',
          rule2: 'off',
        },
      },
    ];
    const result = disableDuplicatedRules(eslintConfig);
    expect(result).toEqual([
      {
        rules: {
          '@stylistic/js/rule1': 'off',
          '@stylistic/ts/rule1': 'off',
          '@typescript-eslint/rule1': 'off',
          '@stylistic/eslint-plugin-plus/rule1': 'off',
          rule1: 'off',
        },
      },
      {
        rules: {
          '@stylistic/js/rule2': 'off',
          '@stylistic/ts/rule2': 'off',
          '@typescript-eslint/rule2': 'off',
          '@stylistic/eslint-plugin-plus/rule2': 'off',
          rule2: 'off',
        },
      },
    ]);
  });
});
