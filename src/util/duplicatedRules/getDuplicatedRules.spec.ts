import { describe, expect, it } from '@jest/globals';
import getDuplicatedRules, { type RuleObject } from './getDuplicatedRules';

describe('getDuplicatedRules', () => {
  it('should return an empty array when there are no duplicated rules', () => {
    expect.hasAssertions();
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { rule2: true },
      { rule3: true },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toStrictEqual([]);
  });

  it('should return an array of duplicated rules', () => {
    expect.hasAssertions();
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { rule1: true },
      { rule2: true },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toStrictEqual([
      {
        ruleNameWithoutPlugin: 'rule1',
        rules: [
          { rule1: true },
          { rule1: true },
        ],
      },
    ]);
  });

  it('should handle rules with plugin names', () => {
    expect.hasAssertions();
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { 'plugin1/rule1': true },
      { 'plugin2/subplugin3/rule1': true },
      { rule2: true },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toStrictEqual([
      {
        ruleNameWithoutPlugin: 'rule1',
        rules: [
          { rule1: true },
          { 'plugin1/rule1': true },
          { 'plugin2/subplugin3/rule1': true },
        ],
      },
    ]);
  });
});
