import { describe, expect, it } from '@jest/globals';
import disableDuplicatedRules from './disableDuplicatedRules';

describe('disableDuplicatedRules', () => {
  it('should return an empty array when the input is empty', () => {
    expect.hasAssertions();
    const eslintConfig: Array<{ rules: Record<string, unknown> }> = [];
    const result = disableDuplicatedRules(eslintConfig);
    expect(result).toStrictEqual([]);
  });

  it('should not modify the rules if there are no duplicated rules', () => {
    expect.hasAssertions();
    const eslintConfig: Array<{ rules: Record<string, unknown> }> = [
      {
        rules: {
          'no-console': 'off',
          'no-unused-vars': 'on',
        },
      },
    ];
    const result = disableDuplicatedRules(eslintConfig);
    expect(result).toStrictEqual(eslintConfig);
  });

  it('should disable duplicated rules except the last one in the plugin order', () => {
    expect.hasAssertions();
    const eslintConfig: Array<{ rules: Record<string, unknown> }> = [
      {
        rules: {
          '@stylistic/js/no-unused-vars': 'on',
          '@stylistic/ts/no-unused-vars': 'on',
        },
      },
      {
        rules: {
          'no-unused-vars': 'on',
          '@typescript-eslint/no-unused-vars': 'on',
        },
      },
    ];
    const expectedEslintConfig = [
      {
        rules: {
          '@stylistic/js/no-unused-vars': 'off',
          '@stylistic/ts/no-unused-vars': 'on',
        },
      },
      {
        rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'on',
        },
      },
    ];
    const result = disableDuplicatedRules(eslintConfig);
    expect(result).toStrictEqual(expectedEslintConfig);
  });
});
